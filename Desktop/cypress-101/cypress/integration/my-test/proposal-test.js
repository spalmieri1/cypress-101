/// <reference types="cypress" />

describe('Proposal Test', () => {

    it('Proposal', () => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
        cy.get(':nth-child(4) > .u-align-center > [data-test=button] > .button-text').click()
        cy.get('[aria-controls="term,0"]').click()
        cy.get(':nth-child(7) > .gr-16 > .form-control-container > .form-control').type('08/01/2021')
        cy.get('.ProposalForm-proposalProfileSelectedTab_3G0Ed > :nth-child(2) > :nth-child(2) > :nth-child(8)').click()
        cy.get(':nth-child(8) > .gr-16 > .vts-input > .form-control-container > .form-control').type('60')
        cy.get('.u-no-border-right').type('32.50')
        cy.get('[data-test=submit-button]').click()
        cy.contains('Proposal successfully created')
        cy.get(':nth-child(4) > .u-align-center > .u-flex > .nested-table-toggle').click()
    })

})