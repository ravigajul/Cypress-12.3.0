///<reference types="cypress"/>
describe('Iterate over elements', () => {
    it('Iterate over the element and print it', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
        cy.get('a.prdocutname').each(($el,index,$list)=>{
            cy.log("Index : " + index + " : " + $el.text());
        })
    });

    it('Iterate over the element and click on a matching product', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
         cy.get('a.prdocutname').each(($el,index,$list)=>{
            if($el.text().includes('Viva Glam Lipstick'))
            {
                cy.wrap($el).click();
            }
        });
    });

    it('Should validate the headers of the table by comparing each value in array', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html"); 
        const expectedHeaders=['Firstname','Lastname','Age']
        cy.get('#t01 tbody tr th').each(($el,index,$list)=>{
            cy.wrap($el).invoke('text').then((actualHeader) => {
            expect(actualHeader).to.deep.equal(expectedHeaders[index]);
            });
        });
    });

    it('Should validate the headers of the table by comparing two arrays', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html"); 
        const expectedHeaders = ['Firstname', 'Lastname', 'Age'];
        const actualHeaders = [];    
        cy.get('#t01 tbody tr th').each(($el, index, $list) => {
            cy.wrap($el).invoke('text').then((headerText) => {
                actualHeaders.push(headerText);
            }).then(() => {
                if (index === $list.length - 1) {
                    expect(actualHeaders).to.deep.equal(expectedHeaders);
                }
            });
        });
    });

    it.only('Should validate the content of the table by comparing two arrays', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html"); 
        const expectedValues = ['John', 'Smith', '45','Jemma','Jackson','94','Michael','Doe','20'];
        const actualValues = [];    
        cy.get('#t01 tbody tr td').each(($el, index, $list) => {
            cy.wrap($el).invoke('text').then((value) => {
                actualValues.push(value);
            }).then(() => {
                if (index === $list.length - 1) {
                    expect(actualValues).to.deep.equal(expectedValues);
                }
            });
        });
    });

    
});