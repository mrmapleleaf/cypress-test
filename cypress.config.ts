import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    // この設定を入れるだけで、vite.config.tsの内容を自動で読み込んでくれる
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
