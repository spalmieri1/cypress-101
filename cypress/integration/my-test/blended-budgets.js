/// <reference types="cypress" />

describe('Blended Budget Tests', () => {

    beforeEach(() => {
        cy.login('super-beta@vts.com', 'Creinsights1')
    })

    it('Opening a deal and seeing the select budget button', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2567961")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.contains('Select budget') })
    it('Select budget modal opens', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2567961")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.contains('Select budget').click()
        cy.contains('No budgets selected') })
    it('Selecting a budget', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2567961")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.contains('Select budget').click()
        cy.get('.budgets-selection__value-container').click()
        cy.contains('HELP ME').click()
        cy.get('[data-test=modal-footer] > [data-test=button] > .button-text').click()
        cy.contains('Full Service Gross') })
    it('Deleting a budget', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2567961")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.contains('Select budget').click()
        cy.get('.u-p > .u-pointer').click()
        cy.get('[data-test=modal-footer] > [data-test=button] > .button-text').click()

     })
    }

)