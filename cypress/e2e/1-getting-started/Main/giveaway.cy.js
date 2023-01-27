/// <reference types="cypress" />
describe('Give Away', () => {
    it('Give Away Data', () => {
        cy.visit('https://docs.google.com/forms/d/1zyGNB93FDeh00d_fKOjg2m4oBvjEPGngujUYkQQBa6M/edit?ts=63a1bf0b#responses')
        cy.get(':nth-child(2) > .JfdRKe > .U26fgb > .MhXXcc > .Lw7GHd').click({force: true})
        cy.get('#Download responses (.csv)').click()
       // cy.get('.email').type("2099913@gmail.com")
       // cy.get('.password').type("BiLL8L@021")
        //cy.get('#loginForm:j_id793557914_2f4cba4e').click()
        cy.wait(2000)
      
   
     })
    })