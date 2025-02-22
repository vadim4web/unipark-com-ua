# unipark-com-ua
UniPark - українська компанія, яка працює над створенням проєктів з 2015 року.

1

```bash
npm create vite@latest .
npm i
npm i vue-i18n vue-router vueperslides
npm i -D @eslint/js eslint eslint-plugin-vue gh-pages prettier sass
```

```package.json>scripts
,
		"deploy": "gh-pages -d dist",
		"prettify": "prettier src/**/*.{js,vue,css} --write",
		"lint": "eslint --fix src/**/*.{js,vue}",
		"format": "npm run prettify && npm run lint"
```

```vite.config.js
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
```

```bash
touch .prettierrc eslint.config.js
```

that is the very basic setup 🤟😎
