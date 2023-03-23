describe('Test Suite ',()=>{

    before(()=>{
        cy.log("In the before hook at the start of suite")
    }),
    beforeEach(()=>{
        cy.log("Running beforeEach hook at the start of each it block")
    }),
    afterEach(()=>{
        cy.log("Running afterEach hook at the end of each it block")
    })
    it('test case 1',()=>{
        cy.log("Running test case 1")
    }),
    it('test case 2',()=>{
        cy.log("Running test case 2")
    }),
    it('test case 3',()=>{
        cy.log("Running test case 3")
    }),
    it('test case 4',()=>{
        cy.log("Running test case 4")
    }),
    after(()=>{
        cy.log("In the after hook at the end of suite")
    })
})