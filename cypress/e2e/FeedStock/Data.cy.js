//const { data } = require("cypress/types/jquery");
 let rowsLength;
describe('Data Driven testing using Excel File', () => { 
    // beforeEach( done=> {
        beforeEach(() => {
            cy.task('readXlsx', { file: 'C:/Users/gsharma/Desktop/CypressAutomation/cypress/fixtures/excelData.xlsx', sheet: "Sheet2"}).then((rows) => {
             rowsLength = rows.length;
             cy.writeFile("C:/Users/gsharma/Desktop/CypressAutomation/cypress/fixtures/xlsxData.json", {rows})
            })
                cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
   
    cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
  //done()
 })
  /*  afterEach (() => {
    cy.screenshot()
    done()
  })*/
    it('Data Driven: Add new Deal', (done) =>{
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i< rowsLength; i++){
    cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL    
    cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click(); //Great Plains Company 
     cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click(); //deal type  
    cy.get('#txtBxDealTitle').type(data.rows[i].Title).wait(2000); //Title 
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
    cy.get('#tbxCounterpartyContract').type(data.rows[i].CounterPartyContract); //counterparty contract   
    cy.get('#tbxContractTerms').type(data.rows[i].ContractTerms);//Contract Terms 
    cy.get('#txtBxDealNotes').type(data.rows[i].DealNotes);//DEAL NOTES 

    cy.get('#tbxSpecialClause').type(data.rows[i].SpecialClause);//SPECIALCLUASE

    cy.get('#cphContent_rblBroker_Applicable > tbody > tr > :nth-child(1) > label').click();//Broker Yes
    cy.wait(4000);
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();
    cy.get('#cphContent_BrokerDiv1 > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("AWAM GROUP{enter}")//Select Broker
    cy.get('#txtBxBrokerFee').type("999999")//Broker Fee
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click();//select broker Fee Per 
    cy.get('#cphContent_BrokerDiv1 > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("LBS{enter}");
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click();//currency
    cy.get('#cphContent_BrokerDiv1 > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("USD{enter}");


    cy.get('#txtBxBrokerNotes').type(data.rows[i].BrokerNotes);//BrokerNotes



    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//GP CUSTOMER  
    cy.get('#cphContent_pnlCustomer > fieldset.full-border > .row > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click();//Payment Terms Notes  
    cy.wait(5000);
    cy.get('#cphContent_rblCustomerPaymentTermsOverride > tbody > tr > :nth-child(1) > label').click(); //Override Payment Terms Yes radio button 
    cy.get('#txtBxCustomerPaymentTermsOverrideNotes').type(data.rows[i].CustomerPaymentsTermsOverride); 
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//Product
    cy.get('#cphContent_pnlProduct > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > a > .text').click(); 
    cy.get('#tbxProductQuality').type(data.rows[i].ProductQuality);//Product Quality  
    cy.get('#lnkSaveDeal').click();//SAVE DEAL 
   // cy.get('[data-notify="message"]').should('have.text', 'Deal saved successfully')
   cy.get('[data-notify="message"]').should('have.text', data.rows[i].message)

   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .btn > .filter-option').click();//suystainibilty certificate
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(2) > .col-lg-3 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("NIS{enter}");
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click();//POS delivery
   cy.get('#cphContent_pnlSustainability > fieldset.full-border > :nth-child(3) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a > .text').click();
cy.wait(4000);
cy.get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click();
cy.get(':nth-child(3) > .row > .col-lg-2 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
cy.get('#tbxSustainabilityNotes').type(data.rows[i].sustainabiltyNotes);


cy.get('#lnkUpdateDeal').click();
cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click()
cy.get('#cphContent_pnlUploadDocuments > fieldset.full-border > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > a').click()
cy.get('#tbxDocumentNotes').type('Companies may also evaluate product quality based on various')
cy.get('#cphContent_fuUploadDocuments').attachFile('testing_feedstock.txt')
cy.get('#btnUpload').click() 

cy.get('#lnkUpdateDeal').click()

cy.get('#lnkbtnEditDetails > .far').click() // STRIP EDIT CLICK

// STRIP PAGE
cy.get('#txtStripStartDate').type('2023-02-24').click({force: true})
cy.get('#txtStripEndDate').type('2023-02-25').click({force: true})

cy.get('#txtTitleTansferLocation').type(' NEW DELHI INDIA') // TitleTansferLocation
cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .btn > .filter-option').click() // Title Transfer Location
cy.get('#cphContent_divTitleTransferState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Utah{enter}")
cy.get('#txtVolQuantity').type('575769.0000') // Quantity
cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()// UNIT OF MEASUERE
cy.get(':nth-child(3) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")

cy.get(':nth-child(5) > .form-line > .btn-group > .btn > .filter-option').click()// TOLERANCE
cy.get(':nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("+/- 2%{enter}")

cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click()// INCO TERMS
cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('CIF{enter}')

cy.get('#txtIncoTermLocation').type('SOUTH AFRICA') // INCO TERMS CITY
cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .btn > .filter-option').click() // INCO TERMS LOCATION
cy.get('#cphContent_divIncoTermState > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Maine{enter}')

cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .btn > .filter-option').click()  // SALE TYPE
cy.get('#cphContent_divSaletype > .col-lg-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('Tank{enter}')

cy.get('#lnkUpdateStrip').click()

//pricing
cy.get('#cphContent_rblstStripPricingType > tbody > tr > :nth-child(1) > label').click()
cy.get('.col-sm-2 > .form-line > .btn-group > .btn').click() // price index
cy.get('.col-sm-2 > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("argus{enter}")

cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .btn > .filter-option').click() // Price Index Currency
cy.get('#cphContent_divPricingRowFour > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type('USD{enter}')
cy.get('#txtbxBasis').type('123').click()  //basis
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .btn').click()  // Basis uom
cy.get('#cphContent_divPricingRowFour > :nth-child(5) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Truck{enter}")
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Pricing At
cy.get('#cphContent_divPricingAt > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Prior{enter}")

cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .btn').click() //Holiday Convention
cy.get('#cphContent_divPricingAt > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Skip{enter}")
cy.get('#lnkbtnAddPricing').click() //Add Pricing

//Add frieght details
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .btn > .filter-option').click() //Transport Mode
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Demurrage{enter}")
cy.get('#txtFreightCost').type('543')//Freight Cost  ///
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .btn > .filter-option').click()//Freight Cost Currency
cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("USD{enter}")

cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .btn > .filter-option').click()//Unit of Measure
cy.get(':nth-child(2) > :nth-child(4) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("MT{enter}")
cy.get('#tbxFromLocation').type('india')//From Location
cy.get('#tbxToLocation').type('south africa')//To Location
cy.get('#cphContent_rblCarrierInvoiceTargray > tbody > tr > :nth-child(1) > label').click()//Carrier Invoices Targray

cy.get('#lnkbtnAddTransport').click()//Add frieght   // 
//ADD DOCUMENTS
cy.get('.col-lg-4 > .form-line > .btn-group > .btn > .filter-option').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="3"] > .waves-effect > .text').click()
//cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > .selected > .waves-effect > .text')
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > .waves-effect > .text').click()
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > .waves-effect > .text').click()  
cy.get('.col-lg-4 > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="4"] > .waves-effect > .text').click ()

cy.get('#cphContent_Back').click()
cy.get('#lnkUpdateDeal').click()
cy.get('[data-notify="message"]').should('have.text','Deal Updated successfully.')
//cy.get('#lnkSubmitForPublishNotify').click()// SUBMIT FOR PUBLISH
//cy.get('[data-notify="message"]').should('have.text','Deal submitted for publish successfully')
.then(() => {
    done()


} )
   /*cy.get('.breadcrumb > :nth-child(1) > a').click();
    cy.url().should ('include','/Pages/Deals');*/
}
            })


})
})