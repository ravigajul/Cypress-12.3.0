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
cy.get('input[type="file"]').selectFile('cypress/fixtures/Laptop-icon.JPG');
```

## Fetching text from alerts

https://docs.cypress.io/api/cypress-api/catalog-of-events  

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


