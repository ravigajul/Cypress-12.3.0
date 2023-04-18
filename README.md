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

## Get Attribute Value

```java script
cy.get('#elementId').invoke('attr', 'attributeName').then((value) => {
    // value will be the attribute value
})
```

## Cypress Actions

Refer to this page for different actions like click, select, type, etc
<https://docs.cypress.io/api/commands/type>

## Targetting an individual test

User it.only to just run that test

```javascript
it.only('test',()=>{

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

## Confirm OK

Notice the change in type of event from window:alert to window:confirm

```javascript
cy.on('window:confirm',(strAlertText)=>{
  return true; //clicks Okay
})

cy.on('window:confirm',(strAlertText)=>{
  return false; //clicks Cancel
})

