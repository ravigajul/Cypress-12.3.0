///<reference types="cypress" />

describe('Environment Variable', () => {
    it('cypress.config.js environment variables', () => {
        console.log(Cypress.env('cyConfigBaseUrl'))
        cy.visit(Cypress.env('cyConfigBaseUrl'))
        cy.log('This is great if the values need to be same across all environments')
    });
    it('cypress.env.json', () => {
        cy.log(Cypress.env('cypressEnvJsonBaseUrl'))
        cy.log('This supports nested fields and one can have dedicated json files for the respective environments')
        cy.log('FirstName :', Cypress.env('user').firstname)
        cy.log('LastName :',Cypress.env('user').lastname)
        cy.log('env : ', Cypress.env('user'))
    });
});