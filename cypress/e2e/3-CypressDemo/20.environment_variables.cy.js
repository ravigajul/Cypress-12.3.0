///<reference types="cypress"/>

describe('Demo the usage of environment variables',()=>{
    it('This test cases demos the retrieval of env variable frm cypress config',()=>{
        cy.visit(Cypress.env("webUnivUrl"))
    })
})