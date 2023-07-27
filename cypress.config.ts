import { defineConfig } from 'cypress'
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
	e2e: {
		specPattern: '**/*.feature',
		screenshotOnRunFailure: true,
		screenshotsFolder: 'cypress/screenshots',
		//clears the screnshots folder
		trashAssetsBeforeRuns: true,
		projectId: 'vbf6o8',
		async setupNodeEvents(
			on: Cypress.PluginEvents,
			config: Cypress.PluginConfigOptions
		): Promise<Cypress.PluginConfigOptions> {
			// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
			await addCucumberPreprocessorPlugin(on, config)
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				})
			)
			// Make sure to return the config object as it might have been modified by the plugin.
			return config
		},
	},
	env: {
		cyConfigBaseUrl: 'https://example.cypress.io',
		webUnivUrl: 'http://www.webdriveruniversity.com/',
	},
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
})
// const { defineConfig } = require("cypress");
// const cucumber=require("cypress-cucumber-preprocessor").default;

// module.exports = defineConfig({
//   e2e: {
//       //implement node event listeners here
//       setupNodeEvents(on,config){
//         on('file:preprocessor',cucumber())
//       },
//       specPattern: "cypress/e2e/**/*.{js,feature}",
//       screenshotOnRunFailure: true,
//       screenshotsFolder: 'cypress/screenshots',
//         //clears the screnshots folder
//        trashAssetsBeforeRuns: true,
//        projectId: "vbf6o8"

//   },
//   env: {
//     cyConfigBaseUrl:'https://example.cypress.io',
//     webUnivUrl:"http://www.webdriveruniversity.com/"
//   },

//   reporter: 'cypress-multi-reporters',
//   reporterOptions: {
//     configFile: 'reporter-config.json',
//   },

// });
