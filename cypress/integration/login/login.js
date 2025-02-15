/// <reference types="cypress" />​

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
cy.fixture('example').then(function (data) {
this.data = data
})
})

Given('I open Ecommerce page', function () {
cy.visit(Cypress.env("baseURL"));
cy.viewport(1800, 1000)
})
When('I click the login button', function () {
cy.get('#login2').click()
cy.wait(2000)
})
Then('Verify that the login page is displayed', function () {
cy.get("#loginusername").then($button => {

$button.is(':visible') ? console.log('Username box is visible') : console.log('Username box is invisible')
//if ($button.is(':visible')){
//console.log('Login place is visible')
// }
//else
})
cy.get("#loginpassword").then($button => {
$button.is(':visible') ? console.log('Password box is visible') : console.log('Password box is invisible')
})
cy.get("button[onclick='logIn()']").then($button => {
$button.is(':visible') ? console.log('Login box is visible') : console.log('Login box is invisible')
})
})

// Scenario: Verify successful login with valid username and password
When('I enter valid login details', function () {
let Username = "MaB";
let Password = "Test@123"
//cy.get('#loginusername').type(this.data.userName)
//cy.get('#loginpassword').type(this.data.password)
cy.get('#loginusername').type(Username)
cy.get('#loginpassword').type(Password)

cy.get("button[onclick='logIn()']").click()
})
Then('verify successfull login', function () {
//cy.get('#nameofuser').contains('Welcome ' + this.data.Username)
cy.get('#nameofuser').should('contain.text', 'Welcome MaB')
})

When ("I login with {string} and {string}", (username, password) => {
cy.get('#loginusername').type(username)
cy.get('#loginpassword').type(password)
cy.get("button[onclick='logIn()']").click()
})