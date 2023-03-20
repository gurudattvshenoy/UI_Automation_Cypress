describe('Test suite for working with different alert windows  ',()=>{
    it('Test case for simple alert to verify cypress auto closes the alert without doing anything',() =>{
        //cypress will automatically handle alerts, means it will click close the alert window
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    }),
 
    it('Test case for simple alert- to assert for alert text ',() =>{
      
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    }),
 
    it('Test case for confirm alert- to assert for alert text and cypress with click on OK ',() =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    }),
 
    it('Test case for confirm alert- to assert for alert text and cypress with click on Cancel ',() =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    }),

    it('Test case for handling prompt based alerts and assert input text  ',() =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: welcome')

    }),
   
    it.only('Test case for alert which perform basic auth',() =>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('have.contain','Congratulations! You must have the proper credentials.')
    })

})