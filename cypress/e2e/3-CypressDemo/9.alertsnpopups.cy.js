///<reference types="cypress"/>
describe('Get Alert Text', () => {
    it('should assert the alert text', () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html"); 
        cy.get('#button1').click();
        cy.on('window:alert',(strAlertText)=>{
            expect(strAlertText).to.equal('I am an alert box!')
        })
    });

    it('should click on ok of the alert', () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html"); 
        cy.get('#button4').click();
        cy.on('window:confirm',(strAlertText)=>{
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        
    });
    it('should click on cancel of the alert', () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html"); 
        cy.get('#button4').click();
        cy.on('window:confirm',(strAlertText)=>{
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
});