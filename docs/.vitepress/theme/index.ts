import DefaultTheme from 'vitepress/theme'
// Load design tokens so live previews on token pages resolve var(--*) values.
// Imported from src/ so docs always stay in sync with the package source.
import '../../../src/index.scss'

export default DefaultTheme
