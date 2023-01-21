///<reference  types="cypress"/>

describe('Intercept demo', () => {
        it('Json Place Holder',()=>{
            cy.visit('https://jsonplaceholder.typicode.com/')
            cy.get('button#run-button').click()
            //debugger
            cy.wait(2000)
            cy.get('code#result span.token.string').should('have.length',5)
        })
        it('Json Place holder Mocking the intercepted call',()=>{
            cy.visit('https://jsonplaceholder.typicode.com/')
            
            //setting up cypress intercept
            cy.intercept('GET','/todos/1',{errorCode: "500",errorMessage:"500 Internal Server Error"}).as('errorResp')

            //invoking the call
            cy.get('button#run-button').click()

            cy.wait("@errorResp").then((data)=>{
                cy.log(JSON.stringify(data.body))
                expect(data.response.body.errorMessage).to.equal("500 Internal Server Error");
            })
        })
});