/// <reference types="cypress" />

describe('Proposal Test', () => {

    it('Proposal', () => {
        cy.login('super-beta@vts.com', 'P0t@t0th3D0g')
        cy.visit('https://acceptance.vts.com/lease/deals/2568249')
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.get('[data-test=add-proposal] > .button-text').click()
        cy.get('[aria-controls="term,0"]').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('5500')
        cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('08/01/2021')
        cy.get('.ProposalForm-proposalProfileSelectedTab_3G0Ed > :nth-child(2) > :nth-child(2) > :nth-child(8)').click()
        cy.get(':nth-child(8) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('60')
        cy.get('.u-no-border-right').type('32.50')
        cy.get('[data-test=submit-button]').click()
        cy.contains('Proposal successfully created')
        cy.get('.proposal-card-actions-container > .overflow-menu > [data-test=overflow-menu-trigger]').click()
        cy.get('.-type-warning').click()
        cy.contains('Successfully deleted a proposal')

    })

})