class SignInPage {
    getMobileNumber(){
        return cy.get("#__layout > div > div.modal.is-active > div.overflow-hidden > div.columns.fill-height > div.card.column.pa-12.overflow-auto > div > div.column.is-10 > span > span:nth-child(1) > div > div > input").click({force:true})
    }
    getPassword(){
        return cy.get('#__layout > div > div.modal.is-active > div.overflow-hidden > div.columns.fill-height > div.card.column.pa-12.overflow-auto > div > div.column.is-10 > span > span:nth-child(2) > div > div.control.is-expanded > input').click({force:true})
    }
    getconfirm(){
        return cy.get("#__layout > div > div.modal.is-active > div.overflow-hidden > div.columns.fill-height > div.card.column.pa-12.overflow-auto > div > div.column.is-10 > button").click({force:true})
        
    }

}
export default SignInPage;