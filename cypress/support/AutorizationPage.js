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
    SubmitLoginform(){
        this.getLoginField().type('globaxv@gmail.com')
        this.getPasswordField().type('Globax123')
        this.getLoginButton().click()
    }

}
export default new AutorizationPage();