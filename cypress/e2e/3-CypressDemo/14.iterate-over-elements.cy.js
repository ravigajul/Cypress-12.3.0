///<reference types="cypress"/>
describe('Iterate over elements', () => {
    it('Iterate over the element and print it', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
        cy.get('a.prdocutname').each(($el,index,$list)=>{
            cy.log("Index : " + index + " : " + $el.text());
        })
    });

    it('Iterate over the element and click on a matching product', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
         cy.get('a.prdocutname').each(($el,index,$list)=>{
            if($el.text().includes('Viva Glam Lipstick'))
            {
                cy.wrap($el).click();
            }
        });
    });
});