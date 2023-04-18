const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      //implement node event listeners here
      
      specPattern: "cypress/e2e/3-CypressDemo/*.js",
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
        //clears the screnshots folder
       trashAssetsBeforeRuns: true,
       projectId: "vbf6o8"
  },
  env: {
    cyConfigBaseUrl:'https://example.cypress.io',
  }
  
});
