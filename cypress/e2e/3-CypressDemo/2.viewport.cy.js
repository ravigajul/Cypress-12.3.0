///<reference  types="cypress"/>
context('Viewport', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/viewport')
    })
  
    it('cy.viewport() - set the viewport size and dimension', () => {
      // https://on.cypress.io/viewport
  
      cy.get('#navbar').should('be.visible')
      cy.viewport(320, 480)
  
      // the navbar should have collapse since our screen is smaller
      cy.get('#navbar').should('not.be.visible')
      cy.get('.navbar-toggle').should('be.visible').click()
      cy.get('.nav').find('a').should('be.visible')
  
      // lets see what our app looks like on a super large screen
      cy.viewport(2999, 2999)
  
      // cy.viewport() accepts a set of preset sizes
      // to easily set the screen to a device's width and height
  
      // We added a cy.wait() between each viewport change so you can see
      // the change otherwise it is a little too fast to see :)
  
      cy.viewport('macbook-15')
      cy.viewport('samsung-note9')
     cy.wait(200)
      cy.viewport('ipad-2')
      cy.wait(200)
      cy.viewport('ipad-mini')
      cy.wait(200)
      cy.viewport('iphone-6+')
      // cy.viewport() accepts an orientation for all presets
      // the default orientation is 'portrait'
      cy.viewport('ipad-2', 'landscape')
      cy.wait(200)
      cy.viewport('iphone-4', 'portrait')
      cy.wait(200)
      cy.viewport('iphone-xr')
      cy.viewport('macbook-16')
     
      // The viewport will be reset back to the default dimensions
      // in between tests (the  default can be set in cypress.config.{js|ts})
    })
  })
  