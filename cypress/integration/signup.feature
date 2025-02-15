Feature: User Signup on DemoBlaze

  As a new user
  I want to sign up on DemoBlaze
  So that I can access the website features

  Scenario: Successful user signup
    Given I open the DemoBlaze homepage
    When I click on the Sign up button
    And I enter a unique username
    And I enter a password
    And I click the Sign up submit button
    Then I should see a signup success alert
