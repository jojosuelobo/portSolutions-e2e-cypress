const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://revamp-ps.etaure.com.br:9000',
    defaultCommandTimeout: 8000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
})
