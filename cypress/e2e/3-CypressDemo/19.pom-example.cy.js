///<reference types="cypress"/>
import HomePage from "../../support/pageobjects/webdriver-uni/HomePage"
import ContactUSPage from "../../support/pageobjects/webdriver-uni/ContactUSPage";
describe('POM Example', () => {
    const homePage = new HomePage();
    const contactUsPage= new ContactUSPage();
    it('should navigate to the home page of webdriver university', () => {
        homePage.GoToHomePage();
        homePage.ClickOnContactUS();
        contactUsPage.FillAndSubmitForm("Ravi","Gajul","ravi.gajul@test.com","test comment")


    })
})