@Regression
Feature: Simple Login feature

    Scenario: This is a sample login scenario
        Given I navigate to the application
        When I enter username webdriver
        And I enter password webdriver123
        And I click on login button
        Then I should be logged in

    Scenario: verify success message on valid login
        Given I navigate to the application
        When I enter username webdriver and password webdriver123
        And I click on login button
        Then I should be logged in
        And The alert is shown with message validation succeeded

    Scenario: verify failure message on invalid login
        Given I navigate to the application
        When I enter username webdriver and password webdriver12345
        And I click on login button
        Then I should be logged in
        And The alert is shown with message validation failed

    Scenario Outline: Validate login data driven
        Given I navigate to the application
        When I enter username <username> and password <password>
        And I click on login button
        Then I should be logged in
        And The alert is shown with message <message>
        Examples:
            | username  | password       | message              |
            | webdriver | webdriver123   | validation succeeded |
            | webdriver | webdriver12345 | validation failed    |