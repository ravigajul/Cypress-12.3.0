///<reference types="cypress"/>
describe('Iterate over elements', () => {
    it('Breaking the loop on meeting a certain condition', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
        const expectedHeaders = ['Firstname', 'Lastname', 'Age']
        let flag=false
        cy.get('#t01 tbody tr th').each(($el, index, $list) => {
            //return simply will not break the loop since it would have stacked the commands. 
            //Adding cy.then and a logic to return to get it working
            cy.then(()=>{
                if(flag){
                    return
                }
                cy.wrap($el).invoke('text').then((actualHeader) => {
                    expect(actualHeader).to.deep.equal(expectedHeaders[index]);
                    if(actualHeader==="Lastname"){
                        flag=true
                    }
                });
            })
        });
    });
});