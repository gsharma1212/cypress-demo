describe('Revision', () => { 
    // beforeEach( done=> {
        beforeEach(() => {
 cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
   
    cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
  //done()
 })
    afterEach (() => {
    cy.screenshot()
    done()
  })
    it('Revision', function myFunction(event){
        cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .btn > .bs-caret > .caret').click(); // Drop down     
        cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control'). type("TFSS-0185{enter}");
    
        cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option')
    cy.get('#lnkbtnFilter').click();
    cy.wait(3000)
    cy.get('#lnkbtnRevisionDetails > .fas').click();
    
    })
})