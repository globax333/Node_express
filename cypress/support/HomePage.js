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
    getTagsList(){
        return cy.get('[class="tag-list"]')
    }
    clickTagChip(){
        this.getTagsList().click();
    }




}
export default new HomePage();