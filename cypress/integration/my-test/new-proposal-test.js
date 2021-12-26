/// <reference types="cypress" />

describe('New Proposal Tests', () => {

    beforeEach(() => {
        cy.login('super-beta@vts.com', 'Creinsights1')
    })
    it('Creating a proposal with 20 fields populated', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2568326")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.get('[data-test=add-proposal] > .button-text').click()
        cy.get(':nth-child(1) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('Proposal Test') // Proposal's label
        cy.get(':nth-child(6) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('01/01/2022') // Execution date
        cy.get('[aria-controls="term,0"]').click()
        cy.get('[data-test=add_first_rent_escalation] > .Icon-icon_3HmFe').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('15000') // Rentable size
        cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('10/10/2021') // Lease commencement date
        cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-8').click()
        cy.get(':nth-child(8) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('72') // Term duration
        cy.get('.u-p-vert-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('2.5') // Base rent
        cy.get('.u-p-top-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('4.5') // Escalation 
        cy.get('[data-test=add_first_free_rent] > .Icon-icon_3HmFe').click()
        cy.get(':nth-child(1) > .u-p-top-lg > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('4') // Free rent duration
        cy.get('[data-test=add_first_other_income] > .Icon-icon_3HmFe').click()
        cy.get('[data-test=other-revenue] > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('6') // Other income start month
        cy.get('[data-test=other-revenue] > .u-p-vert-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('2.75') // Other income amount
        cy.get('.u-p-top-xl > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('1250000') // Percentage rent annual sales
        cy.get('[data-test=stepped_percentage_rent_fields] > :nth-child(2) > .u-p-top-lg.row > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('5.675') // Percentage rent annual sales growth
        cy.get('[data-test=commission] > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('CBRE') // Commissions broker
        cy.get(':nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('02/01/2022') // Commissions date
        cy.get('[data-test=add_first_remaining_lease_obligation]').click()
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('1') // RLO start month
        cy.get(':nth-child(1) > :nth-child(1) > .u-p-top-lg > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('6') // RLO duration
        cy.get(':nth-child(1) > :nth-child(1) > .u-p-vert-lg.row > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('2.75') // RLO amount
        cy.get('.u-border-bottom > .u-flex > .u-flex-expand-left > [data-test=button]').click()
        cy.get('.u-border-bottom > .u-p-top-xl > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('36666.67') // Straight line balance
        cy.get('[aria-controls="options_and_more"]').click()
        cy.get('[data-test=add-tenant-risk] > .Icon-icon_3HmFe').click()
        cy.contains('Security deposit').click()
        cy.get('.gr-16 > .vts-input > .form-control-container > .form-control').type('5000') // Tenant risk amount
        cy.get('.u-p-bottom-lg > :nth-child(1) > .u-flex > .gr-16 > .form-control').type('Security deposit test') // Tenant risk description
        cy.get('[data-test=submit-button] > .button-text').click()
        cy.get('.proposal-card-actions-container > .overflow-menu > [data-test=overflow-menu-trigger]').click()
        cy.get('.-type-warning').click()
    })
    it('Create proposal a proposal with over 20 fields populated', () => {
        cy.visit("https://acceptance.vts.com/lease/deals/2568327")
        cy.get('[data-test=deal-profile-tabs] > .Tabs-tabs_28ejd > [data-test=tab-option]').click()
        cy.get('[data-test=add-proposal] > .button-text').click()
        cy.get(':nth-child(1) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('Proposal Test 2') // Proposal's label
        cy.get(':nth-child(6) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('08/01/2022') // Execution date
        cy.get('[aria-controls="term,0"]').click()
        cy.get('[data-test=add_first_rent_escalation] > .Icon-icon_3HmFe').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('22000') // Rentable size
        cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('03/01/2021') // Lease commencement date
        cy.get(':nth-child(7) > :nth-child(1) > .u-flex > .gr-8').click()
        cy.get(':nth-child(8) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('120') // Term duration
        cy.get('.u-p-vert-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('3') // Base rent
        cy.get('.u-p-top-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('6') // Escalation 
        cy.get('[data-test=add_first_free_rent] > .Icon-icon_3HmFe').click()
        cy.get(':nth-child(1) > .u-p-top-lg > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('8') // Free rent duration
        cy.get('[data-test=add_first_other_income] > .Icon-icon_3HmFe').click()
        cy.get('[data-test=other-revenue] > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('3') // Other income start month
        cy.get('[data-test=other-revenue] > .u-p-vert-lg > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('5.4') // Other income amount
        cy.get('.u-p-top-xl > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('585000') // Percentage rent annual sales
        cy.get('[data-test=stepped_percentage_rent_fields] > :nth-child(2) > .u-p-top-lg.row > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('8.8') // Percentage rent annual sales growth
        cy.get('[data-test=add_another_reimbursable_expense] > .button-text').click()
        cy.get('.deal_terms_attributes_0__reimbursable_expenses_attributes_2__type__value-container').click()
        cy.contains('Insurance').click()
        cy.get('.deal_terms_attributes_0__reimbursable_expenses_attributes_2__recovery_method__value-container').click()
        cy.contains('Modified Gross').click()
        cy.get('.deal_terms_attributes_0__reimbursable_expenses_attributes_2__base_year__value-container').click()
        cy.contains('2021/2022').click()
        cy.get(':nth-child(3) > :nth-child(1) > [data-test=expense-or-recovery] > :nth-child(4) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('5.50') // Expense amount
        cy.get(':nth-child(5) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('2.55') // Expense stop
        cy.get('[data-test=add_first_cost] > .Icon-icon_3HmFe').click()
        cy.get('[data-test=cost] > :nth-child(3) > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('25.50') // TI amount
        cy.get('[data-test=commission] > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('JLL') // Commissions broker
        cy.get(':nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .form-control-container > .form-control').type('06/01/2022') // Commissions date
        cy.get('[data-test=add_first_remaining_lease_obligation]').click()
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('13') // RLO start month
        cy.get(':nth-child(1) > :nth-child(1) > .u-p-top-lg > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('10') // RLO duration
        cy.get(':nth-child(1) > :nth-child(1) > .u-p-vert-lg.row > :nth-child(1) > .u-flex-justify-between > .gr-16 > div.u-flex > .u-no-p-right > .vts-input > .form-control-container > .u-no-border-right').type('4.65') // RLO amount
        cy.get('.u-border-bottom > .u-flex > .u-flex-expand-left > [data-test=button]').click()
        cy.get('.u-border-bottom > .u-p-top-xl > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('89000') // Straight line balance
        cy.get('[aria-controls="options_and_more"]').click()
        cy.get('[data-test=select-option-or-right-type] > .Icon-icon_3HmFe').click()
        cy.get('.option_type__value-container').type('renewal')
        cy.get('[data-test=dropdownOption-Renewal]').click()
        cy.get('.clause__value-container').click()
        cy.contains('Blank clause').click()
        cy.get('[data-test=add-option-or-right]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('6') // Number of renewal options
        cy.get(':nth-child(4) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('12') // Renewal option term
        cy.get(':nth-child(6) > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('Renewal option rate note') // Renewal rate note        
        cy.get('[data-test=add-tenant-risk] > .Icon-icon_3HmFe').click()
        cy.contains('Letter of credit').click()
        cy.get('.u-p-vert-lg > :nth-child(1) > .u-flex > .gr-16 > .vts-input > .form-control-container > .form-control').type('6500.50') // Tenant risk amount
        cy.get('.u-p-bottom-lg > :nth-child(1) > .u-flex > .gr-16 > .form-control').type('This is my letter of credit test description') // Tenant risk description
        cy.get('[data-test=submit-button] > .button-text').click()
        cy.get('.proposal-card-actions-container > .overflow-menu > [data-test=overflow-menu-trigger]').click()
        cy.get('.-type-warning').click()
    })
})
