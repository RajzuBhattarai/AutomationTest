class HomePage {
    getSearchJob() {
        return cy.get('#__layout > div > nav > div > div.navbar-menu > div.navbar-start > div > div:nth-child(1) > input')
    }
    getEnglishTitle() {
        cy.get(".pr-2").click({ force: true })
    }
    getClickSearch() {
        return cy.get('.navbar-item > :nth-child(2) > .button').click({ force: true })

    }
    getSignIn() {
        return cy.get("#__layout > div > nav > div > div.navbar-menu > div.navbar-end > a:nth-child(1)").click({ force: true })
    }

}
export default HomePage;