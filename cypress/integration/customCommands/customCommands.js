/// <reference types="Cypress" />​

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
cy.fixture('example').then(function(data)
{
this.data = data
})
})

Given ('I navigate to demoblaze website', function() {
cy.navigateToPage(Cypress.env("baseURL"));
})

When ('I click the login button', function(){
cy.clickLoginButton()
cy.wait(2000)
})

When ('I enter valid login details', function(){
cy.login(this.data.Username, this.data.Password)
})

    