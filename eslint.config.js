import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.browser },
    rules: {
      // Slide templates are dense, hand-tuned markup (inline ruby text); keep them compact.
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      // Japanese text intentionally uses the full-width space (U+3000).
      'no-irregular-whitespace': 'off',
      'vue/no-irregular-whitespace': 'off',
    },
  },
  { files: ['*.config.js'], languageOptions: { globals: globals.node } },
]
