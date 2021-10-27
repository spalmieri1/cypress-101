/// <reference types="cypress" />

describe('all-my-tests', () => {
    it.only('test1', () => {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Stephen Rocks')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.contains('Stephen Rocks | The Health Foundation!!').should('not.exist')
        cy.contains('Stephen Rocks | The Health Foundation').should('exist')


    })

    it('test2', () => {
        cy.visit ('https://news.google.com')

    })
})
