/// <reference types="cypress" />
describe('VTS login test', () => {

    before(() => {
        console.log("VTS Login Test Initiatied")
    })

    beforeEach(() => {
        console.log("I am called everytime a new test is run!")
    
    })
    it('LoginTest', () => {
        cy.visit("https://acceptance.vts.com")
        cy.get('#user_email').type('super-beta@vts.com')
        cy.get('#user_password').type('Creinsights1')
        cy.get('.btn-primary').click()
        cy.get('.u-m-top').contains('Deals')
    })

})