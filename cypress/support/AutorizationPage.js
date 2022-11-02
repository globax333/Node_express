class AutorizationPage {
    visit(){
        cy.visit('/user/login')
    }
    getLoginField(){
        return cy.get('[type="email"]')
    }
    getPasswordField(){
        return cy.get('[type="password"]')
    }
    getLoginButton(){
        return cy.get('[type="submit"]')
    }
    SubmitLoginform(email, password){
        cy.log('Fill and submit login form')
        
        this.getLoginField().type(email)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
    }

}
export default new AutorizationPage();