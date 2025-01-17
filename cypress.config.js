const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://monsiteweb.com.tn/gestion-conge-test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...config.env,
        username: process.env.CYPRESS_USERNAME,
        password: process.env.CYPRESS_PASSWORD,
      };
      return config;
    },
  },
});
