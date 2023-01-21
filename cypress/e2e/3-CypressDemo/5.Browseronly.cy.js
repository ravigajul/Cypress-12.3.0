describe('Browser only test', () => {
    it('chrome only',{browser:"chrome"}, () => {
        //executes when browser is chrome
        cy.visit('https://example.cypress.io/commands/actions')
    });
    it('Edge or Electron only',{browser:"!chrome"}, () => {
        //executes when browser is other than chrome
        cy.visit('https://example.cypress.io/commands/actions')
    });
    it('Electron only',{browser:["!chrome","!edge"]}, () => {
        //executes when browser is other than chrome
        cy.visit('https://example.cypress.io/commands/actions')
    });
});