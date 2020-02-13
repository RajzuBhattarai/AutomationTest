class PersonalDetailsPage {
    getPersonalInformation() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div.columns.is-marginless.is-vcentered.has-margin-bottom-5.has-background-light > div.column.is-12.is-fullwidth.tabs.is-paddingless.is-marginless > ul > li:nth-child(2) > a > span").click({ force: true })
    }
    getEdit() {
        return cy.get('#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > div.columns.is-vcentered.is-shadowless.is-marginless.is-mobile > div.column.has-text-right.is-5-desktop.is-2-mobile > button').click({ force: true })
    }
    getFullName() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(1) > span > div > div > input").click({ force: true }).clear()
    }
    getDOB() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(2) > span > div > div.pb-2 > label:nth-child(1) > input[type=radio]").check()
    }
    //for DOB
    getRadioDOB() {
        return cy.get('.pb-2 > :nth-child(1) > input').check()
    }
    getEnterDOB() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(2) > span > div > div.control > input").click({ force: true }).clear()
    }
    //forage
    getRadioAge() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(2) > span > div > div.pb-2 > label:nth-child(2) > input[type=radio]").check()
    }
    getTypeAge() {
        cy.Selector("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(2) > span > div > div.control > input").type('23')
    }
    //forGender
    getGender() {
        return cy.get('.is-flex > :nth-child(2)').click({ force: true })
    }
    //forMaritalStatus
    getMaritalStatus() {
        return cy.get(':nth-child(4) > :nth-child(1) > .field > div > :nth-child(3)').click({ force: true })
    }
    //forCountry
    getCountry() {
        return cy.get('.control > .field > .mb-0 > .px-2 > .autoCompleteInput').clear().type("Nepal")
    }
    //forReligion
    getReligion() {
        return cy.get(":nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().type("Hinduism")

    }
    //for cuurent Address(){
    getCurrentAddress() {
        return cy.get(":nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().type("Shantinagar,Kathmandu")
    }
    //for permanent address
    getPermanentAddress() {
        return cy.get(':nth-child(8) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .field > .mb-0 > .px-2 > .autoCompleteInput').clear().type("Damak,Jhapa")
    }
    //for Submit
    getSubmit() {
        return cy.get('.card-footer > .column > .button').click({ force: true })
    }
    ///in jobpreference site
    getJobLevel() {
        return cy.get(":nth-child(1) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").click({ force: true }).clear()
    }
    getJobTime() {
        return cy.get('.field > :nth-child(2) > .control > .is-full-width').select("Anytime")
    }
    getJobCategory() {
        return cy.get(":nth-child(3) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .autoCompleteInput").clear().click({ force: true })
    }
    getAvailableFor() {
        return cy.get(":nth-child(4) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .autoCompleteInput").clear().click({ force: true })
    }
    getSkills() {
        return cy.get(":nth-child(5) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .autoCompleteInput").clear().click({ force: true })
    }
    getPreferredLocation() {
        return cy.get(":nth-child(6) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .autoCompleteInput").clear().click({ force: true })
    }
    getWorkingStatus() {
        return cy.get(":nth-child(7) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().click({ force: true })
    }
    getExpectedSalary() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.px-12.py-3.card-content > div > div:nth-child(9) > div > div > div > div:nth-child(3) > span > div > input").clear().click({ force: true })
    }
    getDescription() {
        return cy.get("div.pell-content-custom").clear().click({ force: true })
    }
    getUpdate() {
        return cy.get("#__layout > div > div.is-relative > div > div > div > div.column.is-9 > div > div:nth-child(2) > div > span > div.card-footer > div > button").click({ force: true })
    }
    //Education
    getEducationDegree() {
        return cy.get(":nth-child(1) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().click({ force: true })
    }
    getEducationProgram() {
        return cy.get(":nth-child(2) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().click({ force: true })
    }
    getEducationBoard() {
        return cy.get(":nth-child(3) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().click({ force: true })
    }
    getNameOfInstitute() {
        return cy.get(":nth-child(4) > :nth-child(1) > :nth-child(1) > .control > .field > .mb-0 > .px-2 > .autoCompleteInput").clear().click({ force: true })
    }
    getGraduationYear() {
        return cy.get(':nth-child(1) > span > .select > .is-full-width')
    }
    getGraduationMonth() {
        return cy.get(':nth-child(2) > span > .select > .is-full-width')
    }
    getMarksSecuredIn() {
        return cy.get('.columns > :nth-child(1) > .select > .is-full-width')
    }
    getPercenatgeObtained() {
        return cy.get('span > .input')
    }
    getEducationSubmit() {
        cy.get('.card-footer > .column > :nth-child(2)').click({ force: true })
    }
    //forLogOut
    getLogOut() {
        return cy.get('a.navbar-item').invoke('show').each(function ($el, index, $list) {
            const lg = $el.text()
            if ($el.includes("Logout")) {
                $el.click({ force: true })
            }
        })
    }
}
export default PersonalDetailsPage