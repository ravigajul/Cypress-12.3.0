///<reference types="cypress"/>
describe('GraphQL Query', () => {
    it('Should query the graphql', () => {
        cy.request({
            url: 'https://countries.trevorblades.com/',
            method: 'POST',
            headers:{
                "content-type": "application/json; charset=utf-8"
            },
            body:{
                query:"{\n  countries {\n    capital\n    currency\n  }\n}"}
        }).then(response=>{
            const resp = JSON.parse(JSON.stringify(response))
           cy.log(resp.body.data.countries[0].capital)
            
        })
    })
})