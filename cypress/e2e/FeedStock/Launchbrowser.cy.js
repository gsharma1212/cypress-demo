/// <reference types="cypress" />


it('google test', function(){

  cy.visit('https://hcm47.sapsf.com/login?company=targraytec#/login')




  //assert
 // cy.get('.SplashHeader_text__1J5m_').should('be.visible')

 cy.get('.SplashHeader_text__1J5m_').should('have.text', 'Good Afternoon!')


})