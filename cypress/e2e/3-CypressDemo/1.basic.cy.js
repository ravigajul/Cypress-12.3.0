///<reference  types="cypress"/>
const { expect } = require("chai");

describe('Testing', () => {
    it('First Test', () => {
        //.\node_modules\.bin\cypress run --spec .\cypress\e2e\3-CypressDemo\1.basic.cy.js
        cy.visit('https://example.cypress.io/')
        cy.get('div#utilities.col-xs-12 h2').should('have.have.length',4)  
        //cy.get('div#utilities.col-xs-12 h2').should('')
    });
});
