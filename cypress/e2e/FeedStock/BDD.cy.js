import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I login', () => {

//cy.loginWith({ email: 'xyz@gmail.com', password: 'my password'})
cy.loginWith(["web04"], Cypress.env("username") , Cypress.env("password"))
//cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
})

Then('the url is {word}', (url) => {
cy.url().should ('include','/Pages/Deals')

})

//('I\'m logged in', () => {
//cy.window().its('localStorage.email').should('eq', 'xyz@gmail.com')

//})