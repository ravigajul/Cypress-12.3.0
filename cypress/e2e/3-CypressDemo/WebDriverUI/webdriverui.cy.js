///<reference types="cypress" />

describe('Webdriver UI Test', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    });
   
    it('Fill the contact us form', () => {
        cy.document().should('have.a.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','Contact-Us/contactus.html')
        cy.get("[placeholder='First Name']").type('Ravi')
        cy.get("[name='last_name']").type('Gajul')
        cy.get("[placeholder='Email Address']").type('Ravi.Gajul@Test.com')
        cy.get("[placeholder='Comments']").type('Some test comments in text area field')
        cy.get("[type='submit']").click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    });
});