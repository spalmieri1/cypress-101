/// <reference types="cypress" />

describe('Tenant Update Test', () => {

    beforeEach(() => {
        cy.login('super-beta@vts.com', 'Creinsights1')
    })

    it('Adding a tenant update', () => {
        cy.visit("https://acceptance.vts.com/lease/tenants/301998"),
        cy.get('.UpdatesContainer-updateContainer_4I-rF > [data-test=button]').click(),
        cy.get('[data-test=mention-textarea]').type("Stephen test update"),
        cy.contains("Save").click()
        })
})