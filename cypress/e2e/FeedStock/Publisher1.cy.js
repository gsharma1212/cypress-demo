describe('Publisher', () => { 
    beforeEach(() => {
   cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
   //cy.ntlm(["web04"], "gsharma", "Rishi@20");
   cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
})
   
   it('AddNewDeal_button is disabled', function myFunction(event){
  
  cy.wait(5000)
  //cy.get('#lnkbtnFilter').should('be.enabled').click();
    cy.get('#lnkbtnAdd').should('be.visible').click(); 
    cy.get('#lnkbtnAdd').should('not.be.enabled'); 

    // ADD NEW DEAL    })

   })

   
   it('Actions_feature', function myFunction(event){
  
      cy.wait(5000)
      //cy.get('#lnkbtnFilter').should('be.enabled').click();
        cy.get('#lnkbtnAdd').should('be.visible').click(); 
        cy.get('#lnkbtnAdd').should('not.be.enabled'); 
    
        // ADD NEW DEAL    })
    
       })
})