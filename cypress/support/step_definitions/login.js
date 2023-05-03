import {Before,Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
let stub;
Before(()=>{
    cy.log('Executing before step')
    stub = cy.stub()

})
Given("I navigate to the application",()=>{
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html")
});

When('I enter username {word}',(username)=>{
    cy.get('#text').type(username)
    
});

When('I enter username {word} and password {word}',(username,password)=>{
    cy.get('#text').type(username)
    cy.get('#password').type(password)
});

And('I enter password {word}',(password)=>{
    cy.get('#password').type(password)
});

And('I click on login button',()=>{
    cy.get('#login-button').click()
    cy.on('window:alert',stub)
});

Then('I should be logged in',()=>{
    cy.log("i'm logged in")
}); 

And('The alert is shown with message {word} {word}',(message1,message2)=>{
    const expectedMessage = message1+" " + message2;
    cy.log(stub.getCall(0).lastArg);
    expect(stub.getCall(0).lastArg).to.equal(expectedMessage);
});