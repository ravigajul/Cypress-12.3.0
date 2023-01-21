const cypress = require("cypress")


describe('Device Test',()=>{
    it('iphone xr',()=>{
        cy.viewport('iphone-xr')
        cy.visit("http://example.com")
    })
    it('iphone se2',()=>{
        cy.viewport('iphone-se2')
        cy.visit("http://example.com")
    })
    it('ipad 2',()=>{
        cy.viewport('ipad-2')
        cy.visit("http://example.com")
    })
    it('samsung note 9',()=>{
        cy.viewport('samsung-note9')
        cy.visit("http://example.com")
    })
    it('iphone xr',()=>{
        cy.viewport('samsung-s10')
        cy.visit("http://example.com")
    })
    
})