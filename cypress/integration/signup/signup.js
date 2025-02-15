import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the DemoBlaze homepage", () => {
  cy.visit("https://demoblaze.com/index.html");
});

When("I click on the Sign up button", () => {
  cy.get("#signin2").click();
  cy.wait(1000); // Ensure modal appears
});

When("I enter a unique username", () => {
  const username = "testuser" + Date.now();
  cy.get("#sign-username").type(username);
});

When("I enter a password", () => {
  cy.get("#sign-password").type("TestPassword123!");
});

When("I click the Sign up submit button", () => {
  cy.get("button[onclick='register()']").click();
});

Then("I should see a signup success alert", () => {
  cy.on("window:alert", (alertText) => {
    expect(alertText).to.equal("Sign up successful.");
  });
});
