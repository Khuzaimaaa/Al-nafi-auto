/// <reference types= "cypress" />

describe('Tracks page', () => {
    it('7 days free trial', () => {
        cy.visit('https://alnafi.com/auth/signin')
        cy.get('[type="text"]').type("s")
        cy.get('#Password').type("s")
        cy.get('.px-6').click()
        cy.wait(3000)
        cy.visit('https://alnafi.com/tracks')
        cy.get('.space-y-2 w-full').should('have.text', 'Rs 88,250')
        cy.wait(3000) 
     })
    })