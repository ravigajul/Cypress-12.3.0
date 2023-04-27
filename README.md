# Cypress-12.3.0

## Real World app

```javascript
npm install -g yarn
git clone git@github.com:cypress-io/cypress-realworld-app.git
cd cypress-realworld-app
yarn dev
```

## Install along with Dev dependencies

```javascript
npm install --include=dev
```

## When Intellisense Doesn't work

Add the below directive on the top of your spec.cy.js file

```javascript
/// <reference types="cypress" />
```

## Chaining of commands

```javascript
it('should click on the elements with command chaining', () => {
        cy.visit("https://automationteststore.com/"); 
        //find will look in the narrowed scope of dom retrieved by find and click first element of all elements recevied.
        cy.get('.container-fluid').find('.prdocutname').eq(0).click();
    });
    it('should click the element with contains', () => {
        cy.visit("https://automationteststore.com/"); 
        //contains will look for the element with its text in narrows scope by both find and get
        cy.get('.container-fluid').find('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
```

## Invoke to get attribute or text or remove attribute

```java script
cy.get('#elementId').invoke('attr', 'attributeName').then((value) => {
// value will be the attribute value
})
//alternatively
cy.get('#elementId').invoke('text').as('text') //invoking the text method of jquery.

//get property value
cy.get('#elementId').invoke('prop', 'innerText').should('contain','test')

//remove attribute
 cy.get('#iframe').invoke('removeAttr','target').click();
```

## Cypress Actions

Refer to this page for different actions like click, select, type, etc
<https://docs.cypress.io/api/commands/type>

## Targetting an individual test

User it.only to just run that test

```javascript
it.only('run only this',()=>{

})
```

## Skipping an individual test

User it.only to just run that test

```javascript
it.skip('skip only this',()=>{

})
```

## Free selector tools

<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>
Ranorex Selocity
Selectors Hub
Chropath
Chrome Developer Tool

## Optimized CSS selector if using href

```javascript
//href attribute ending with contact
a[href$='contact']
//href attribute starting with https
a[href^='https']
```

## Use Xpath

Cypress by default doesn't support xpath. It only supports CSS selectors
Download and install cypress-xpath third party library
To see it in intellisence add the directive

```javascript
///<reference types="cypress-xpath" />
cy.xpath('xpathselector').click()
```

## Document,Title & Url

```javascript
cy.document().should('have.a.property','charset').and('eq','UTF-8')
cy.title().should('include','WebDriver | Contact Us')
cy.url().should('include','Contact-Us/contactus.html')
```

## Default browser

When executed  in commandline, the default browser is electron. Use --browser chrome/edge to execute the testes in chrom or edge respectively

## Run individual specs

```javascript
npx cypress run --spec cypress/e2e/3-CypressDemo/WebDriverUI/webdriverui.cy.js
```

## Run all specs in a folder

```javascript
npx cypress run --spec cypress/e2e/3-CypressDemo/WebDriverUI/*
```

## Run all in cypress version above 10

```javascript
Add the below in e2e in cypress.config.js
experimentalRunAllSpecs: true,
```

## Disable Video during run in cli

Add the below in cypress.config.js

```javascript
"video": false 
```

## Check if element Exists

```javascript
cy.get('#element-id').then(($el) => {
  if ($el.length) {
    // Element exists
  } else {
    // Element doesn't exist
  }
});
```

## Making the click open the page in same window

```javascript
 cy.get("#file-upload").invoke('removeAttr','target').click({force:true});
```

## File Upload

```javascript
//when the input text box is available 
cy.get('input[type="file"]').selectFile('cypress/fixtures/Laptop-icon.JPG');

//when the text box is not available and had to drag and drop
it.only('upload file', () => {
cy.visit('https://tiiny.host/')
//Please note that css selector below has to be of type input
cy.get('#content-selector-tabpane-html input[type="file"]').selectFile('cypress/fixtures/fileupload.html', {
action: 'drag-drop',
force:true
},)
});
```

## Fetching text from alerts

<https://docs.cypress.io/api/cypress-api/catalog-of-events>  

```javascript
cy.on('window:alert',(strAlertText)=>{
  expect(strAlertText).to.equal('I am an alert box!')
})
```

## Alert

```javascript
cy.on('window:alert',(strAlertText)=>{
  expect(strAlertText).to.equal('I am an alert box!') //Auto Accepts
})
```

## Confirm OK/Cancel

Notice the change in type of event from window:alert to window:confirm

```javascript
cy.on('window:confirm',(strAlertText)=>{
  return true; //clicks Okay
})

cy.on('window:confirm',(strAlertText)=>{
  return false; //clicks Cancel
})
```

## Handling iFrames

Please note multiple concepts have been used here.  

1. Opening the redirected page in same window  
2. Getting the iframe body  
3. Switching from Jquery context to cypress context  
4. Aliasing  
5. Asserting modal text  

```javascript

it('Assert the text from iframe modal popup', () => {
        cy.visit("http://www.webdriveruniversity.com/"); 
        //removing the target attribute to that the page opens in same window
        cy.get('#iframe').invoke('removeAttr','target').click();
        //getting iframe body
        cy.get('#frame').then($iframe=>{
            //body is returned as JQuery Element
            const body = $iframe.contents().find('body');
            //Switching JQuery context to Cypress context to use cypress commands
            cy.wrap(body).as('iframe')
        })
        //finding button within iframe body
        cy.get('@iframe').find('#button-find-out-more').click();
        //getting the modal text in Jquery element
        cy.get('@iframe').find('#myModal').should($expectedModelText=>{
            //getting the text from Jquery Element
            const text = $expectedModelText.text();
            //Asserting
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        });
    });
```

## Promise Simple Example

```javascript

let promise = new Promise((resolve, reject) => {
let a = 1 + 1;
if (a == 2) {
resolve('Promise Fullfilled!');
} else {
reject('Promised is rejected');
}
})
promise
.then(message => {
console.log(message + ' Promise is passed');
})
.catch(message => {
console.log(message + ' Promise is rejected');
})
```

## GetText and validate

```javascript
//using invoke method to get the property value of innerText
cy.get('span.bgnone').invoke('prop','innerText').should('contain','Skinsheen Bronzer Stick');
//using invoke followed by promise to use chai assertion
cy.get('span.bgnone').invoke('prop','innerText').then(strText=>{
expect(strText).to.equal("Skinsheen Bronzer Stick");
})
//using promise and jquery
cy.get('span.bgnone').then(strText=>{
expect(strText.text()).to.equal("Skinsheen Bronzer Stick");
})
```

## Iterating through elements

```javascript
cy.get('ul>li').each(($el, index, $list) => {
  // $el is a wrapped jQuery element
  if ($el.someMethod() === 'something') {
    // wrap this element so we can
    // use cypress commands on it
    cy.wrap($el).click()
  } else {
    // do something else
  }
})
```

## Compare Table Headers

```javascript
it.only('Should validate the headers of the table by comparing two arrays', () => {
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
```
## Exit each() Loop
Use return false to exit the loop  
```javascript
it('Iterate over the element and click on a matching product', () => {
        cy.visit("https://automationteststore.com/"); 
        cy.get('a[href*="product/category&path"]').contains('Makeup').click();
         cy.get('a.prdocutname').each(($el,index,$list)=>{
            if($el.text().includes('Viva Glam Lipstick'))
            {
                cy.wrap($el).click();
                return false;
            }
        });
    });
```

## API POST Call

```javascript
it('Should generate token after successfull post call',() => {
        cy.request({
            url: "<<replace>>",
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            failOnStatusCode: false,
            body:
                {
                    "user": {
                        "email": "ravi.gajul@test.com",
                        "password": "testing!"
                    }
                }
        }).then(resp=>{
            const token =resp.body.user.token;
            expect(resp.status).to.equal(200);
        });
});
```

## GRAPHQL Query

```javascript
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
```

## Configure Multiple Reports

1. Install the following dependencies  

```javascript
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

2. Create reporter-config.json at root level as below  

```json
{
 "reporterEnabled": "spec, cypress-multi-reporters",
 "mochaJunitReporterReporterOptions": {
  "mochaFile": "cypress/results/results-[hash].xml"
 },
 "reporterOptions": {
  "reporterEnabled": "mochawesome",
  "mochawesomeReporterOptions": {
   "reportDir": "cypress/results/mochawesome",
   "quite": true,
   "overwrite": false,
   "html": false,
   "json": true
  }
 }
}
```

3. run the test and merge the json files

```javascript
npx cypress run
//merge all the content into file file mochawesome.json
npx mochawesome-merge cypress/results/mochawesome/*.json>mochawesome.json
npx marge mochawesome.json
```
