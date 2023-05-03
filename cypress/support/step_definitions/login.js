import {Before,Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the application",()=>{
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html")
});

When('I enter username {word}',(username)=>{
    cy.get('#text').type(username)
    
});

And('I enter password {word}',(password)=>{
    cy.get('#password').type(password)
});

And('I click on login button',()=>{
    cy.get('#login-button').click()
});

Then('I should be logged in',()=>{
    cy.log("i'm logged in")
}); 