/// <reference types="cypress" />


it('Pulses', function(){


  
  cy.ntlm(["web04"], "gsharma", "Rishi@20");

cy.visit('http://web04/TEST-TPSContractManagement');
cy.get('#lnkbtnFilter').click();

})
