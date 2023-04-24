///<reference types="cypress"/>
describe('Using Alias to context pass', () => {
    it('Should store the value in alias', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
        cy.get('a.prdocutname').eq(0).as('firstProduct')
       // cy.get('@firstProduct').invoke('text').should('contain','L\'EXTRÊME Instant Extensions Lengthening Mascara')
        
    });
    it('Should have access to value stored in alias in previous test', () => {
        this.firstProduct.invoke('text').should('contain','L\'EXTRÊME Instant Extensions Lengthening Mascara')
    });
});