/// <reference types="cypress" />
describe('Tracks page', () => {
    it('7 days free trial', () => {
        cy.visit('https://alnafi.com/auth/signin')
        cy.get('[type="text"]').type("s")
        cy.get('#Password').type("s")
        cy.get('.px-6').click()
        cy.wait(3000)
      cy.visit('https://alnafi.com/tracks/blockchain-certification')
      cy.get('.space-x-3 > .bg-white').click()
      cy.wait(3000)
   
     })
     
    
     describe('CAT PAGE VERIFICATION', () => {
      it('price', () => {
        cy.visit('https://alnafi.com/tracks/blockchain-certification')
         //yearly
         cy.get('.space-y-8 > .grid > :nth-child(1)').should('have.text','YearlyRs 172,250 Enroll now ')
      cy.wait(2000)
      //half yearly
      cy.get('.space-y-8 > .grid > :nth-child(2)').should('have.text', 'Half YearlyRs 86,125 Enroll now ')
      cy.wait(2000)
      //quarterly
      cy.get('.space-y-8 > .grid > :nth-child(3)').should('have.text','QuarterlyRs 43,063 Enroll now ')
      cy.wait(2000)
      //monthly
      cy.get('.space-y-8 > .grid > :nth-child(4)').should('have.text','MonthlyRs 15,000 Enroll now ')
      cy.wait(2000)
          
           })
          
  })
  
  describe('Add to Cart', () => {
    it('Add and Go to Cart', () => {
      cy.visit('https://alnafi.com/auth/signin')
      cy.get('[type="text"]').type("s")
      cy.get('#Password').type("s")
      cy.get('.px-6').click()
      cy.wait(3000)
      cy.visit('https://alnafi.com/tracks/blockchain-certification')
      //yearly
      cy.get('.space-x-3 > .py-4').click({force: true})
      cy.get('.form-select').select('Urdu')
      cy.get('.text-left > .btn-primary').click()
      cy.wait(5000)
      cy.visit('https://alnafi.com/cart')
      cy.get('.font-semibold > :nth-child(1)').should('have.text', 'Rs 172250')
      //half yearly
      //cy.visit('https://alnafi.com/tracks/cat')
      //cy.get(':nth-child(2) > .absolute > .btn-primary').click()
      //cy.get('#enrollmentBtn').click({force:true})
      //cy.get('.form-select').select('Urdu')
      //cy.get('.text-left > .btn-primary').click()
      //cy.wait(5000)
      //cy.visit('https://alnafi.com/cart')
      //cy.get(':nth-child(3) > .gap-x-2 > .font-semibold > :nth-child(1)').should('have.text', 'Rs 44125')
  
    })
  
  
  })

})