const { defineConfig } = require("cypress");
const cucumber=require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
      //implement node event listeners here
      setupNodeEvents(on,config){
        on('file:preprocessor',cucumber())
      },
      specPattern: "cypress/e2e/**/*.{js,feature}",
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
        //clears the screnshots folder
       trashAssetsBeforeRuns: true,
       projectId: "vbf6o8"
       
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
