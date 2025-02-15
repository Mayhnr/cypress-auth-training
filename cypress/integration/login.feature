Feature: Demoblaze ecommerce website login validation

Application regression​

@login
Scenario: Verify that the login page is accessible
    Given I open Ecommerce page
    When I click the login button
    Then Verify that the login page is displayed
    
Scenario: Verify successful login with valid username and password 
    Given I open Ecommerce page
    When I click the login button
    When I enter valid login details
    Then verify successfull login

Scenario Outline: Login with different credentials
    Given I open Ecommerce page
    When I click the login button
    When I login with "<username>" and "<password>"
Examples:
| username | password | ​
| darmolyn | schoolbag | ​
| Taiwo | rain |​
