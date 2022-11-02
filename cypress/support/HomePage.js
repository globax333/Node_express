class HomePage {
    visit(){
        cy.visit('/')
    }
    getLoginButton(){
        return cy.get('[href="/user/login"]')
    }
    ClickLoginButton(){
       this.getLoginButton().click()
    }
    getProfileButton(){
        return cy.get('[href*="/profile/"]')
    }
    clickProfileButton(){
       this.getProfileButton().click();
    }

}
export default new HomePage();