const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      //implement node event listeners here
      baseUrl:'https://example.cypress.io',
      specPattern: "cypress/e2e/3-CypressDemo/*.js",
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
        //clears the screnshots folder
       trashAssetsBeforeRuns: true,
       projectId: "vbf6o8"
  },
  
});
