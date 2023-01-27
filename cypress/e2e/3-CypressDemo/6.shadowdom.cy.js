/// <reference types="cypress" />
describe('shadow dom suite', () => {
    it('shadow test', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')

        //is inside a shadow root hence fails
        cy.get('#container')
    });

    it('Handle shadow dom test', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')

        //is inside a shadow root hence fails
        cy.get('#app').shadow().find('#container').should('have.text','Content in the shadow, without style leaksDynamically generated content')
        cy.get('tbody button').e
    });
});