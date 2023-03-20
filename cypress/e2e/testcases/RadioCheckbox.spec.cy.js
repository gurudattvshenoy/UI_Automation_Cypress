describe('Test suite for working with Radio button and Checkboxes  ',()=>{
    it('Test case for Radio button',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('#female').should('not.be.checked')
        cy.get('#male').should('not.be.checked').check().should('be.checked')
    
    }),
    it('Test case for checking/unchecking specific check box',()=>{
    
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       
        //Check specific checkbox 
        cy.get('#tuesday')
          .should('be.visible')
          .check()
          .should('be.checked')
    
          // clean up
        cy.get('#tuesday')
          .uncheck()
          .should('not.be.checked')
    }),
    it('Test case for checking and unchecking ALL check boxes',()=>{
    
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       //Check  ALL checkboxes
        cy.get('input.form-check-input[type="checkbox"]')
          .should('be.visible')
          .check()
          .should('be.checked')
    
          // clean up
        cy.get('input.form-check-input[type="checkbox"]')
          .uncheck()
          .should('not.be.checked')
    }),

    it('Test case for checking and unchecking First Check box in the checkbox group',()=>{
    
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')
     //Check first checkbox
      cy.get('input.form-check-input[type="checkbox"]')
        .should('be.visible')
        .first()
        .check()
        .should('be.checked')
      //wait for 5 secs - Added to see in the test runner at run time
        cy.wait(5000)
        // clean up
      cy.get('input.form-check-input[type="checkbox"]')
         .first()
        .uncheck()
        .should('not.be.checked')
  }),
  it('Test case for checking and unchecking Last Check box in the checkbox group',()=>{
    
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
   //Check last checkbox
    cy.get('input.form-check-input[type="checkbox"]')
      .should('be.visible')
      .last()
      .check()
      .should('be.checked')
    //wait for 5 secs - Added to see in the test runner at run time
      cy.wait(5000)
      // clean up
    cy.get('input.form-check-input[type="checkbox"]')
       .last()
      .uncheck()
      .should('not.be.checked')
})
})