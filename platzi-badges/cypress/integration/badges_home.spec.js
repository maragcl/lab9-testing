describe('BadgeHome', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })
    it('frontpage can be opened', () => {
        cy.contains('Badges')
    })
    it('Badges Conf can ve clicked', () => {
        cy.get('[alt="logo"]').click()
    })
})