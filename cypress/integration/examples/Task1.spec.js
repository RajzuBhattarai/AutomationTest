///  <reference types="cypress"/>
import HomePage from '../Page Objects/HomePage'
import SignInPage from '../Page Objects/SignInPage'
import PersonalDetailsPage from '../Page Objects/PersonalDetailsPage'
describe('MyTestSuite', function () {
    beforeEach(function () {
        cy.fixture("example.json").then(function (data) {
            this.data = data
        })
    })
    it('verify login', function () {
        //classes and objects
        const homePage = new HomePage()
        const signInPage = new SignInPage()
        const personalDetailsPage = new PersonalDetailsPage()
        //base url
        cy.visit(Cypress.env("baseurl"))
        cy.viewport(1200, 660);//specifying viewport
        //homepage
        homePage.getEnglishTitle()
        homePage.getSearchJob().type("computer")
        homePage.getClickSearch()
        cy.wait(10000)
        cy.get(".is-bottom-paddingless > :nth-child(1) > :nth-child(1) > .is-10 > .is-vcentered > .is-3 > .field > .mb-0 > .autoCompleteInput").type("lalitpur").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        cy.wait(10000)
        homePage.getSignIn()
        //signin page
        signInPage.getMobileNumber().type(this.data.mobileNumber)
        signInPage.getPassword().type(this.data.password)
        signInPage.getconfirm()
        cy.wait(10000)
        //personal page
        personalDetailsPage.getPersonalInformation()
        personalDetailsPage.getEdit()
        personalDetailsPage.getFullName().type(this.data.fullName)
        personalDetailsPage.getRadioDOB()
        personalDetailsPage.getEnterDOB().type("1996-08-25");
        personalDetailsPage.getGender()
        cy.wait(5000)
        personalDetailsPage.getMaritalStatus()
        personalDetailsPage.getCountry().then(function () {
            cy.get("div a.break-word").click({ force: true })
        })

        personalDetailsPage.getReligion().then(function () {
            cy.get("div a.break-word").click({ force: true })
        })

        cy.get(5000)
        personalDetailsPage.getCurrentAddress().then(function () {
            cy.get("div a.break-word").click({ force: true })
        })

        cy.wait(5000)
        personalDetailsPage.getPermanentAddress().then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getSubmit()
        cy.wait(10000)

        //getting to job preference and edit
        cy.get(':nth-child(3) > a > .text-capitalize').scrollIntoView().click({ force: true })
        cy.get('.has-text-right > .button').click({ force: true })

        //editing in job preference
        personalDetailsPage.getJobLevel().type("Entry Level").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getJobTime()
        personalDetailsPage.getJobCategory().type("Computer").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getAvailableFor().type("Full Time").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getSkills().type("js").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getPreferredLocation().type("Lalitpur").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getWorkingStatus().type("Actively Seeking Employment").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getExpectedSalary().type("20000")
        personalDetailsPage.getDescription().type("I am trying to persue my career as software developer")
        personalDetailsPage.getUpdate()
        //getting Education
        cy.get(':nth-child(4) > a > .text-capitalize').click({ force: true })
        cy.get('.has-text-right > .button').click({ force: true })
        //edting education
        personalDetailsPage.getEducationDegree().type("Bachelor").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getEducationProgram().type("Computer Engineering").then(function () {
            cy.get("div a.break-word").click({ force: true })
        })
        personalDetailsPage.getEducationBoard().type("TU").then(function () {
            cy.get("div a.break-word").click({ multiple: true })
        })
        personalDetailsPage.getNameOfInstitute().type("Kantipur EC").then(function () {
            cy.get("div a.break-word").click({ multiple: true })
        })
        personalDetailsPage.getGraduationYear().select("2019")
        personalDetailsPage.getGraduationMonth().select("August")
        personalDetailsPage.getMarksSecuredIn().select("Percentage")
        personalDetailsPage.getPercenatgeObtained().type("78")
        personalDetailsPage.getEducationSubmit()
        //for logout
        cy.get("div.navbar-item.has-dropdown.is-hoverable").trigger("mouseover")
        cy.get("#__layout > div > nav > div > div.navbar-menu > div.navbar-end > div.navbar-item.has-dropdown.is-hoverable > div.navbar-dropdown.is-right > a:nth-child(2)").click({ force: true }).then(function (element) {
            cy.get('div.snackbar.notification.is-success').then(function (element) {
                const msg = element.text()
                expect(msg.includes("Success")).to.be.true

            })
        })
    })
})