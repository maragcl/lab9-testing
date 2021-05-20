describe('New Badge', () => {
    const firstName = "Jorge Luis"
    const lastName = "Borges"
    const email = "jorge.borges@gmail.com"
    const jobTitle = "Backend developer"
    const twitter = "jorgejs"

    beforeEach(() =>{
        cy.visit('http://localhost:3000/badges/new')
    })
    it('Url can be opened', () => {
        cy.contains('New Attendant')
    })
    it('BadgeForm. Inputs work', () => {
        cy.get('[data-test-id=badge-form-container] [name=firstName]').type(firstName)
        cy.get('[data-test-id=badge-container]').contains(firstName)

        cy.get('[data-test-id=badge-form-container] [name=lastName]').type(lastName)
        cy.get('[data-test-id=badge-container]').contains(lastName)

        cy.get('[data-test-id=badge-form-container] [name=email]').type(email)

        cy.get('[data-test-id=badge-form-container] [name=jobTitle]').type(jobTitle)
        cy.get('[data-test-id=badge-container]').contains(jobTitle)

        cy.get('[data-test-id=badge-form-container] [name=twitter]').type(twitter)
        cy.get('[data-test-id=badge-container]').contains(twitter)
    })
    
    describe('Add new badge', () => {
        beforeEach(() => {
            cy.newBadge({
                firstName: firstName,
                lastName: lastName,
                email: email,
                jobTitle: jobTitle,
                twitter: twitter,
                avatarUrl: ''
            })
        })
        it('BadgeContainer', () => {
            cy.get('[data-test-id=badges-list] li').last().contains(firstName)
            cy.get('[data-test-id=badges-list] li').last().contains(lastName)
            cy.get('[data-test-id=badges-list] li').last().contains(twitter)
            cy.get('[data-test-id=badges-list] li').last().contains(jobTitle)
        })
    })
})