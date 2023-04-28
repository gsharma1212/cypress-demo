describe('SaveVendor', () => { 
    beforeEach(() => {
   cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
   //cy.ntlm(["web04"], "gsharma", "Rishi@20");
   cy.visit("http://web04/TEST-FinanceWorkflow/Pages/CustomerRequestList")
})


it('check all mandatory fields', function(done) {
cy.get('#cphContent_btnNewCustomerRequest').click();
cy.get('.panel-title > a').should("be.visible");
//cy.get('#tbxReference').then($text => {
   // cy.get('#tbxReference').invoke('val').then((myValue)=>{
    cy.get('#tbxReference').invoke('val').as('textFunction')
    

 cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(1) > label').click()

 cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(2) > label').click()

cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(3) > label').click()

cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(4) > label').click()

 cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(5) > label').click()

cy.get('#cphContent_cblGPCompany > tbody > tr > :nth-child(6) > label').click()

cy.get('#cphContent_pnlCustomerDetail > :nth-child(1) > :nth-child(4)').should('not.be.disabled');






cy.get(':nth-child(3) > .btn-group > .btn').click()//CUSTOMER INFO

 cy.get('#cphContent_pnlCustomerInfo > :nth-child(1) > .panel-title').should("be.visible")

 cy.get(':nth-child(3) > .btn-group > .open > .bs-searchbox > .form-control').type("BATT{enter}")




 cy.get('#tbxCustomerName').type("TARGRAY INDIA PVT LTD GURGRAM").invoke('val').should('not.have.lengthOf', 102)

cy.get('#tbxAddress1').type("s/o satya krishna sajjapuram").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxAddress2').type("tanuku d.no:-24-2-3 west godavi").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxCity').type("Tanuku").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxPostal').type("53211").invoke('val').should('not.have.lengthOf', 102)

        cy.get(':nth-child(10) > :nth-child(1) > .form-line > .btn-group > .btn').click()

        cy.get(':nth-child(10) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("Aust{enter}")

        cy.get(':nth-child(10) > :nth-child(2) > .form-line > .btn-group > .btn').click()

        cy.get(':nth-child(10) > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("alas{enter}")

        cy.get('#tbxPhone').type("949420365487956698").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxFax').type("anand123654897525631436412304674601426021").invoke('val').should('not.have.lengthOf', 102)

        cy.get(':nth-child(12) > :nth-child(1) > .form-line > .btn-group > .btn').click()

        cy.get(':nth-child(12) > :nth-child(1) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("sek{enter}")

        cy.get(':nth-child(12) > :nth-child(2) > .form-line > .btn-group > .btn').click()

        cy.get(':nth-child(12) > :nth-child(2) > .form-line > .btn-group > .open > .bs-searchbox > .form-control').type("credit{enter}")

        cy.get(':nth-child(13) > .btn-group > .btn').click()

        cy.get(':nth-child(13) > .btn-group > .open > .bs-searchbox > .form-control').type("ANAND{enter}")  //CUSTOMER INFO

        cy.get('#tbxNamePrincipleOwner').type("ananda mohan mallipudi").should('not.have.lengthOf', 102) //contact info

        cy.get('.panel-body > :nth-child(3) > .panel-title').should("be.visible")

        cy.get('#tbxMailPrincipleOwner').type("mallipudi@gmail.com").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxNamePurchasingManager').type("gaurav mallipudi").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxMailPurchasingManager').type("mallipudi@gmail.com").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxNameCFO').type("ananda mallipudi").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxMailCFO').type("allipudi@gmail.com").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxNameAR').type("mallipudi").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxMailAR').type("malipudi@gmail.com").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxNameAP').type(" mallipudi ananda mohan").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxMailAP').type("malliudi@gmail.com").invoke('val').should('not.have.lengthOf', 102)//contact info end

        cy.get('#tbxFuelLicense').type("ana1236598").invoke('val').should('not.have.lengthOf', 102) // biofuels only

        cy.get('#cphContent_pnlBioFuels > .col-md-12 > .panel-title').should("be.visible")

        cy.get('#tbxSGPermit').type("gfds6598").invoke('val').should('not.have.lengthOf', 102) // biofuels only

        cy.get('#tbxCreditLimit').type("965876598").invoke('val').should('not.have.lengthOf', 102) // credit limit

        cy.get(':nth-child(4) > .col-md-12 > .panel-title').should("be.visible")

        cy.get('#tbxEDCLimit').type("564264").invoke('val').should('not.have.lengthOf', 102) // credit limit

        cy.get('#tbxGST').type("GSTtargray158790956992").invoke('val').should('not.have.lengthOf', 102) //tax data

        cy.get('#cphContent_pnlTaxData > .col-md-12 > .panel-title').should("be.visible")

        cy.get('#tbxVAT').type("VATtargray09564475892").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxIRS').type("IRSNUMBERtargrAY984475892").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxTaxExempt').type("TAxexemptnumbertargray158790956984475892").invoke('val').should('not.have.lengthOf', 102)

        cy.get('#tbxCounty').type("united states of america i love this country&i love my INDIA ALSO").invoke('val').should('not.have.lengthOf', 102)//tax data end

        cy.get('#cphContent_pnlNotes > .col-md-6 > .panel-title').should("be.visible")

cy.get('#tbxNotes1').type(" IFC’s Discount Note Program was launched in June 2009 to complement IFC’s Global MTN Program. The program provides an additional funding and liquidity management tool for IFC to support our trade finance and supply chain initiatives, and to expand the availability of short-term local currency finance. Our discount notes offer a high-quality, short-term investment opportunity in U.S. dollar and Chinese renminbi.IFC was the first multilateral institution to launch discount note programs in Chinese renminbi and Turkish lira to eligible institutional investors globally, enabling the regular issuance of offshore discount notes and expanding the availability of short-term local-currency finance.In FY22, IFC issued $7.5 billion under the Global Discount Note Program.Dnomiatedin UD an CNHaturtiesraning overnight to 360 daysMinimum order is $100,000 aggregate face amount per maturity dateUncertified book-entry form  Offered through ten dealersAvailable in bearer form onlySetlemnt vFedwe").should('not.have.lengthOf', 8000)  // deal notes





cy.get('#cphContent_btnSaveDraft').click() // save draft
cy.get(':nth-child(1) > .black-text').click()


.then(() => {
        done()
      })
//cy.get('#cphContent_btnSaveDraft')

  })


  it.only('Referencevalue', function(done) {
    //let sRowValue = this.textFunction;
   const sRowValue = 'FN-RM01-0289';
    for (let i = 1; i<=15; i++){
    
			let sValue = null;
   cy.xpath("//*[@id='mainForm']/section[2]/div[2]/div/div/div[3]/table/tbody/tr[" + i + "]/td[2]").invoke('text').then(($sValue)=> {
    if($sValue == sRowValue){
      // If the sValue match with the description, it will initiate one more inner loop for all the columns of 'i' row 
     // for (let j=1;j<=15;j++){
        //let sColumnValue= cy.xpath("//*[@id='lnkbtnEditReq']/section[2]/div[2]/div/div/div[3]/table/tbody/tr[" + i + "]/td[7]").click();
        let sColumnValue= cy.xpath("/html/body/form/section[2]/div[2]/div/div/div[3]/table/tbody/tr[" + i + "]/td[7]/a[2]").click()
        .then(() => {
          done()
        })
       
    //System.out.println(sColumnValue);
     
  //  break;
    }
  })

    }
})
})