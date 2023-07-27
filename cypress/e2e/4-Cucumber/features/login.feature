@regression
Feature: Simple Login feature

    Background: Background reduces code duplication
        Given I navigate to the application

    @smoke
    Scenario: This is a sample login scenario
        When I enter username webdriver
        And I enter password webdriver123
        And I click on login button
        Then I should be logged in

    @functional
    Scenario: verify success message on valid login
        When I enter username webdriver and password webdriver123
        And I click on login button
        Then I should be logged in
        And The alert is shown with message "validation succeeded"

    @error
    Scenario: verify failure message on invalid login
        When I enter username webdriver and password webdriver12345
        And I click on login button
        Then I should be logged in
        And The alert is shown with message "validation failed"

    @datadriven
    Scenario Outline: Validate login data driven
        When I enter username <username> and password <password>
        And I click on login button
        Then I should be logged in
        And The alert is shown with message '<message>'
        Examples:
            | username  | password       | message              |
            | webdriver | webdriver123   | validation succeeded |
            | webdriver | webdriver12345 | validation failed    |