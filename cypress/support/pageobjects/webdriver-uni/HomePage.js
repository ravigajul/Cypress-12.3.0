class HomePage{
    GoToHomePage(){
        cy.visit(Cypress.env("webUnivUrl"));
    }
    ClickOnContactUS(){
        cy.get('#contact-us').invoke("removeAttr",'target').click();
    }
}

export default HomePage; 