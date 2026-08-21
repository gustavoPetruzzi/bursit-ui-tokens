import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const tokensDirname = dirname(fileURLToPath(import.meta.url));

/**
 * Recursively finds files with the requested extension below a source directory.
 *
 * @param {string[]} src Path segments relative to the script directory.
 * @param {string} ending File-name suffix to include.
 * @returns {string[]} Absolute paths for matching files.
 */
const walkDirectory = (src = ['src'], ending = '.scss' ) => {
  const componentsTokensPath = path.join(tokensDirname, '..', ...src);
  const files = [];
  const dirs = fs.readdirSync(componentsTokensPath, { withFileTypes: true });

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      files.push(...walkDirectory([...src, dir.name]));
    } else {
      if (dir.name.endsWith(ending)) {
        const filePath = path.join(dir.parentPath, dir.name);
        files.push(filePath);
      }
    }
  }

  return files;
};


/**
 * Reads CSS custom-property definitions from the token source file.
 *
 * @returns {Map<string, string>} Token names mapped to their declared values.
 */
const getDefinitions = () => {
  const tokensPaths = walkDirectory();
  const tokens = new Map();

  for (const tokensPath of tokensPaths) {
    try {
      const src = fs.readFileSync(tokensPath, 'utf-8');

      for (const m of src.matchAll(/^\s*(--[\w-]+)\s*:\s*([^;]+);/gm)) {
        tokens.set(m[1], m[2].trim());
      }
    } catch (error) {
      throw new Error(`Error reading ${tokensPath}`, { cause: error });
    }
  }

  return tokens;

}


/**
 * Finds CSS custom-property references in the supplied files.
 *
 * @param {string[]} files Absolute paths to files to inspect.
 * @returns {Map<string, Set<string>>} Token names mapped to referencing files.
 */
const getReferences = (files) => {
  const tokens = new Map();

  try {
    for (const filePath of files) {
      const file = fs.readFileSync(filePath, 'utf-8');

      for (const m of file.matchAll(/var\(\s*(--[\w-]+)/g)) {
        const value = tokens.get(m[1]);
        if (value) {
          tokens.set(m[1], new Set([...value, filePath]));
        } else {
          tokens.set(m[1], new Set([filePath]));
        }
      }
    }
  } catch (error) {
    throw new Error(`Error reading file`, { cause: error });
  }

  return tokens;

}

/**
 * Validates that every referenced token is defined somewhere in the package.
 * Exits with code 0 when valid, 1 when undefined references are found.
 *
 * @returns {void}
 */
const validateTokens = () => {
  const definitions = getDefinitions();
  const references = getReferences(walkDirectory());

  let errors = 0;

  for (const [reference, files] of references) {
    if (!definitions.has(reference)) {
      errors++;
      console.error(`❌ ${reference} — used in ${[...files].join(', ')} but not defined`);
    }
  }

  if (errors > 0) {
    console.error(`\n${errors} undefined token reference(s) found.`);
    process.exit(1);
  }

  console.log('✅ All token references are defined.');
  process.exit(0);
};

validateTokens();