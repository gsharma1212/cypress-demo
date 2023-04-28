describe('Trader', () => { 
    const text = undefined;
 
        beforeEach(() => {
 cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
   
    cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
 
 })
   /* afterEach (() => {
    cy.screenshot()
    done()
  })*/
    it('check all mandatory fields', (done) =>{
    cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL    
    cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click(); //Great Plains Company 
     cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click(); //deal type  
    cy.get('#txtBxDealTitle').type("TESTING TARGRAY -FEEDSTOCK CONTRACT Application").wait(2000);  
cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
    cy.get(':nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();//trading rules dropdown  
    cy.get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text').click();
    cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .btn').click();//quality survey dropdown  
    cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
    cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click(); //quantity survey dropdown  
    cy.get(':nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get(':nth-child(6) > .form-line > .btn-group > .btn > .filter-option').click();//method of transport 
    cy.get(':nth-child(6) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
    cy.get(':nth-child(7) > .form-line > .btn-group > .btn > .filter-option').click();//insepection cost  
    cy.get(':nth-child(7) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get('#tbxCounterpartyContract').type("testing targray"); //counterparty contract   
    cy.get('#tbxContractTerms').type("testing dnjvdnfjjvjkjkdsnjkncjdncjvnjndfjnvjnjdnvjtargray");//Contract Terms 
    cy.get('#txtBxDealNotes').type("testing dhhjbhvjbhfdbhdvbjhdbhcdjbvhsbtargray");//DEAL NOTES 
    cy.get('#tbxSpecialClause').type("testingsacndhdfjkdvkl115151515156d556s56c15sd1c5v cv fdvb targray");//SPECIALCLUASE    
    cy.get('#pnlDealDetails > :nth-child(3)')//BROKER 
cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1) > label').click();//BROKER YES RADIO BUTTON 
    //cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(2) > label')//BROKER NO RADIO BUTTON  
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click(); // BROKER IF RADIO BUTTON YES MEANS   
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click();
    //cy.get('#cphContent_BrokerDiv1 > :nth-child(2)').type("0")   // broker fee
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();
    //cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .btn').click(); //broker fee per 
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click(); //currency   
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
    cy.get('#txtBxBrokerNotes').type('sdnjvkjnfndjncjcnjcndknjnvnvj '); //Broker notes 
    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//GP CUSTOMER  
    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click();//Payment Terms Notes  
    cy.wait(10000);
    //cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label')//Override Payment Terms 
cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label').click(); //Override Payment Terms Yes radio button 
// cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')//Override Payment Terms no radio button  
 cy.get('#txtBxCustomerPaymentTermsOverrideNotes').type('sdjkvjvfjnvndjvknd'); 
    //cy.get('#cphContent_pnlSupplier > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn')//Great Plains Supplier 
    //cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(1) > label')//Override Payment Terms Yes radio button  
//cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')//Override Payment Terms no radio button   
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//Product
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click(); 
    cy.get('#tbxProductQuality').type('good sdnjnvkjdfnjkj');//Product Quality  
    cy.get('#lnkSaveDeal').click();//SAVE DEAL  
    cy.get('#cphContent_rfvtxtBxBrokerFee').should('have.text','Required')
   .then(() => {
        done()
      })
   // cy.screenshot();
   //done();
} )
   
it.only('save_button',  function(done) {

    cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL    
    cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click(); //Great Plains Company 
     cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click(); //deal type  
    cy.get('#txtBxDealTitle').type("TESTING TARGRAY -FEEDSTOCK CONTRACT Application").wait(2000); 
cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
    cy.get(':nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();//trading rules dropdown  
    cy.get(':nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text').click();
    cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .btn').click();//quality survey dropdown  
    cy.get('[style="margin-right: 2px;"] > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
    cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click(); //quantity survey dropdown  
    cy.get(':nth-child(5) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get(':nth-child(6) > .form-line > .btn-group > .btn > .filter-option').click();//method of transport 
    cy.get(':nth-child(6) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
    cy.get(':nth-child(7) > .form-line > .btn-group > .btn > .filter-option').click();//insepection cost  
    cy.get(':nth-child(7) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get('#tbxCounterpartyContract').type("testing targray"); //counterparty contract   
    cy.get('#tbxContractTerms').type("testing dnjvdnfjjvjkjkdsnjkncjdncjvnjndfjnvjnjdnvjtargray");//Contract Terms 
    cy.get('#txtBxDealNotes').type("testing dhhjbhvjbhfdbhdvbjhdbhcdjbvhsbtargray");//DEAL NOTES 
    cy.get('#tbxSpecialClause').type("testingsacndhdfjkdvkl115151515156d556s56c15sd1c5v cv fdvb targray");//SPECIALCLUASE    
   /* cy.get('#pnlDealDetails > :nth-child(3)')//BROKER 
//cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1) > label').click();//BROKER YES RADIO BUTTON 
    //cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(2) > label')//BROKER NO RADIO BUTTON  
   // cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click(); // BROKER IF RADIO BUTTON YES MEANS   
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click();
    
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();
    
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click();
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click(); //currency   
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
    cy.get('#txtBxBrokerNotes').type('sdnjvkjnfndjncjcnjcndknjnvnvj '); //Broker notes */
    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//GP CUSTOMER  
    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click();//Payment Terms Notes  
    cy.wait(10000);
    //cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label')//Override Payment Terms 
cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label').click(); //Override Payment Terms Yes radio button 
// cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')//Override Payment Terms no radio button  
 cy.get('#txtBxCustomerPaymentTermsOverrideNotes').type('sdjkvjvfjnvndjvknd'); 
    //cy.get('#cphContent_pnlSupplier > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn')//Great Plains Supplier 
    //cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(1) > label')//Override Payment Terms Yes radio button  
//cy.get('#cphContent_rblVendorPaymentTermsOverride > tbody > tr > :nth-child(2) > label')//Override Payment Terms no radio button   
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//Product
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click(); 
    cy.get('#tbxProductQuality').type('good sdnjnvkjdfnjkj');//Product Quality  
    cy.get('#lnkSaveDeal').click();//SAVE DEAL 
   //cy.get('#cphContent_lblDealNumber').invoke('text').as('text');
   //cy.log("===== Print Value Using Invoke Command ==== ", this.textFunction);
  //cy.log("deal no is", this.textFunction);
    cy.get('[data-notify="message"]').should('have.text', 'Deal saved successfully')
    /*cy.get('#cphContent_lblDealNumber').invoke('text').then((text)=>{
        cy.log(text);
        cy.get('.breadcrumb > :nth-child(1) > a').click();
        cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .btn > .bs-caret > .caret').click(); // Drop down     
            cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control'). type(text).type('{enter}')
          // cy.type('{enter}')
    })
   */
    cy.get('#cphContent_lblDealNumber').then($text => {
    const txt = $text.text()
    cy.log(txt)

    //expect(txt).to.eq('SomeText')
    cy.wrap(txt).as('txt')
    .then(() => {
        done()
})

})
   

})
it.only('filter',  function (done){
    cy.log(this.txt)
    cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .btn > .bs-caret > .caret').click(); // Drop down  
    //cy.get('@txt').then(txt => {
        //expect(txt).to.contain("SomeText")
        
        cy.get(':nth-child(1) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control'). type(this.txt).type('{enter}')
    // }) 
    
    .then(() => {
        done()
})
} )
})