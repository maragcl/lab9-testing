describe('Badges', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/badges')
    })
    it('Badges url can be opened', () => {
        cy.get('[alt="Conf Logo"]')
    })
    it('Filter Badge works when data is incorrect', () => {
        cy.get('[data-test-id=filter-badges-input]').type('this badge is fake')
        cy.contains('No badges were found')
    })
    it('Filter Badge works when data is correct', () => {
        cy.get('[data-test-id=filter-badges-input]').type('Ma')
        cy.get('[data-test-id=badges-list]')
    })
})