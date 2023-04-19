///<reference types="cypress"/>
describe('iFrames', () => {
    it('Assert the text from iframe modal popup', () => {
        cy.visit("http://www.webdriveruniversity.com/"); 
        //removing the target attribute to that the page opens in same window
        cy.get('#iframe').invoke('removeAttr','target').click();
        //getting iframe body
        cy.get('#frame').then($iframe=>{
            //body is returned as JQuery Element
            const body = $iframe.contents().find('body');
            //Switching JQuery context to Cypress context to use cypress commands
            cy.wrap(body).as('iframe')
        })
        //finding button within iframe body
        cy.get('@iframe').find('#button-find-out-more').click();
        //getting the modal text in Jquery element
        cy.get('@iframe').find('#myModal').should($expectedModelText=>{
            //getting the text from Jquery Element
            const text = $expectedModelText.text();
            //Asserting
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        });
        cy.get('@iframe').contains('#myModal','Close').click();
    });
});