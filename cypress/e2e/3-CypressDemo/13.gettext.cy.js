///<reference types="cypress"/>
describe('Get text of element using promise and jquery text() method', () => {
    it('should get text of the element using jquery', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('.container-fluid').find('.prdocutname').eq(0).click();
        cy.get('span.bgnone').then((strInnerText)=>{
            //.text() is the jquery method
            console.log(strInnerText.text());
        })
    });

    it.only('should get text of the element using invoke', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('.container-fluid').find('.prdocutname').eq(0).click();
        cy.get('span.bgnone').invoke('prop','innerText').should('contain','Skinsheen Bronzer Stick');
        cy.get('span.bgnone').then(strText=>{
            expect(strText.text()).to.equal("Skinsheen Bronzer Stick");
        })
    });
    
});