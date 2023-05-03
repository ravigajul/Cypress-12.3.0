Feature: Simple Login feature

Scenario: This is a sample login scenario
Given I navigate to the application
When I enter username webdriver
And I enter password webdriver123
And I click on login button
Then I should be logged in

Scenario: This is a another simple login scenario
Given I navigate to the application
When I enter username webdriver and password webdriver123
And I click on login button
Then I should be logged in
And The alert is shown with message validation succeeded