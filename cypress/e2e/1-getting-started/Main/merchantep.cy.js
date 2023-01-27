/// <reference types="cypress" />
describe('Merchant portal', () => {
    it('Easypaisa Portal Data', () => {
        cy.visit('https://easypay.easypaisa.com.pk/easypay-merchant/faces/pg/site/Login.jsf')
        cy.get('.email').type("2099913@gmail.com")
        cy.get('.password').type("BiLL8L@021")
        cy.get('#loginForm:j_id793557914_2f4cba4e').click()
        cy.wait(5000)
      
   
     })
    })