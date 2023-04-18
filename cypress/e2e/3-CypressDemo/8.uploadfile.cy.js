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
});