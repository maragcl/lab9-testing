Cypress.Commands.add('newBadge', ({firstName, lastName, email, jobTitle, twitter, avatarUrl}) => {
    cy.request('POST', 'http://localhost:3001/badges',{
        firstName,
        lastName,
        email,
        jobTitle,
        twitter,
        avatarUrl
    }).then(res => {
        cy.visit('http://localhost:3000/badges/')
    })
})