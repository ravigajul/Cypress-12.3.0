///<reference types="cypress"/>
describe('API POSt Call', () => {
    it('Should generate token after successfull post call',() => {
        cy.request({
            url: "https://api.realworld.io/api/users/login",
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            failOnStatusCode: false,
            body:
                {
                    "user": {
                        "email": "ravi.gajul@test.com",
                        "password": "Ant3m3an!"
                    }
                }
        }).then(resp=>{
            const token =resp.body.user.token;
            expect(resp.status).to.equal(200);
            cy.request({
                url:'https://api.realworld.io/api/articles',
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": "Token " + token
                },
                body:{
                    "article": {
                        "tagList": [],
                        "title": "Chaining23",
                        "description": "This is to learn call chaining",
                        "body": "posting a new article22"
                    }
                },
                failOnStatusCode: false

            }).then(result=>{
                cy.log(JSON.stringify(result))
            })
        })
    });
});