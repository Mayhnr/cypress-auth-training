Feature: Demoblaze ecommerce website contact modal validation

Application regression​

@login
    Scenario: Verify that the contact page is accessible when not logged in 
    Given I navigate to demoblaze website
    When I click the contact button
    Then I should see a New Message tag

    Scenario: Verify that the contact page is accessible when logged in 
    Given I navigate to demoblaze website
    When I click the login button
    When I enter valid login details
    When I click the contact button
    Then I should see a New Message tag