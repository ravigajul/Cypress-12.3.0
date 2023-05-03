class ContactUSPage{
    FillAndSubmitForm(fName,lName,email,comment){
        cy.get("[placeholder='First Name']").type(fName);
        cy.get("[placeholder='Last Name']").type(lName);
        cy.get("[placeholder='Email Address']").type(email);
        cy.get("[placeholder='Comments']").type(comment);
        cy.get("[type='submit']").click();
        cy.get('#contact_reply h1').invoke("text").should('contain',"Thank You for your Message!")
    }
   
}

export default  ContactUSPage;