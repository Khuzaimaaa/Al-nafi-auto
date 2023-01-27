/// <reference types= "cypress" />
describe('Easypaisa Checkout', () => {
    it('Checkout', () => {
        cy.visit('https://alnafi.com/auth/signin')
        cy.get('[type="text"]').type("s")
        cy.get('#Password').type("s")
        cy.get('.px-6').click()
        cy.wait(3000)
        cy.visit('https://alnafi.com/courses/hidden')
        cy.wait(3000)
        cy.get('.text-left > .flex-wrap > :nth-child(1)').click()
        cy.wait(3000)
        cy.get('.text-left > .flex-wrap > .block').click()
        cy.wait(3000)
        cy.visit('https://alnafi.com/checkout')
        cy.wait(3000)
        cy.get('.bg-transparent').type("03162772104")
        cy.wait(3000)
        cy.get('.btn-primary').click()
        cy.wait(3000)
     })
    })
  
    
        
                            
            