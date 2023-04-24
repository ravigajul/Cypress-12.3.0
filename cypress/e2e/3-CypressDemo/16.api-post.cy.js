///<reference types="cypress"/>
describe('API POSt Call', () => {
    it('Should generate token after successfull post call', () => {
        cy.request({
            url: "https://api.realworld.io/api/users/login",
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:
                {
                    "user": {
                        "email": "ravi.gajul@test.com",
                        "password": "Ant3m3an!"
                    }
                }
        }).then(resp=>{
            cy.log(resp.body.user.token)
            expect(resp.status).to.equal(200);
            
        })
    });
});