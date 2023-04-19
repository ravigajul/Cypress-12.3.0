///<reference types="cypress"/>
describe('Cypress Commands Chaining', () => {
    it('should click on the elements with command chaining', () => {
        cy.visit("https://automationteststore.com/"); 
        //find will look in the narrowed scope of dom retrieved by find
        cy.get('.container-fluid').find('.prdocutname').eq(0).click();
    });
    it('should click the element with contains', () => {
        cy.visit("https://automationteststore.com/"); 
        //contains will look for the element with its text in narrows scope by both find and get
        cy.get('.container-fluid').find('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
});