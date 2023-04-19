///<reference types="cypress"/>
describe('File Upload', () => {
    it('Should upload the file from fixtures folder', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true});
        cy.get('input[type="file"]').selectFile('cypress/fixtures/Laptop-icon.JPG');
        cy.get('#submit-button').click();
    });
    it('Should throw error to upload the fil', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true});
        cy.get('#submit-button').click()
        
    });

    it.only('upload file', () => {
        cy.visit('https://tiiny.host/')
        //Please note that css selector below has to be of type input
        cy.get('#content-selector-tabpane-html input[type="file"]').selectFile('cypress/fixtures/fileupload.html', {
            action: 'drag-drop',
            force:true
          },)
        cy.contains('[type="submit"]','Upload').click()
        cy.get('div.validation-error').invoke('text').should('contain','Please enter a real email address')
    });
});