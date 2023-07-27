const { defineConfig } = require("cypress");
const cucumber=require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
      //implement node event listeners here
      setupNodeEvents(on,config){
        on('file:preprocessor',cucumber())
      },
      specPattern: "cypress/e2e/**/*.{js,feature}",
      baseUrl:"http://www.google.com",
      excludeSpecPattern:["cypress/e2e/1-getting-started/*.js","cypress/e2e/2-advanced-examples/*.js"],
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
        //clears the screnshots folder
       trashAssetsBeforeRuns: true,
       projectId: "vbf6o8",
       defaultCommandTimeout:10000
       
  },
  env: {
    cyConfigBaseUrl:'https://example.cypress.io',
    webUnivUrl:"http://www.webdriveruniversity.com/"
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  
});
