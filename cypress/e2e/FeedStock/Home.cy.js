describe('Home', () => { 
    beforeEach(() => {
   cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
   //cy.ntlm(["web04"], "gsharma", "Rishi@20");
   cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
})
   
   it('Check "Verify Home Page', (done) => {
  cy.wait(5000)
    cy.url().should ('include','/Pages/Deals')
    .then(() => {
        done()
      })
      })
      
      
      
      it('Check "Add New Deal_BUtton" Visible', (done) => {
        cy.wait(5000)
        cy.get('#lnkbtnFilter').should('not.be.disabled') 
          .then(() => {
              done()
          
          //cy.get('#lnkbtnAdd').should('be.visible').click(); 
            })
            }) 
            
            it('Check "Add New Deal_BUtton" Enable', (done) => {
              cy.wait(5000)
              cy.get('#lnkbtnFilter').should('not.be.disabled') 
                .then(() => {
                    done()
                
                  })
                  })   
})