///<reference types="cypress"/>
describe('Aliasing', () => {
    it('Should store the value in alias', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
        cy.get('a.prdocutname').eq(0).as('firstProduct')
        
    });
    it('Should have access to value stored in alias in previous test', () => {
        cy.get('@firstProduct').invoke('text').should('contain','text')
    });
});