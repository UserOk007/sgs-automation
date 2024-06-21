const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  retries: { "runMode": 1, "openMode": 0 },
  videoCompression: false,
  viewportWidth: 1600,
  viewportHeight: 1020,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
