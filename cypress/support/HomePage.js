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
    getGolobalFeed(){
        return cy.get('a').contains('Global Feed')
    }
    getLikes(){
        return cy.get('.btn.btn-sm.btn-primary')
    }
    DecreaseLikes(){
        return cy.get('.btn.btn-sm.btn-primary').contains('50').click()
    }
    IncreaseLikes(){
         return cy.get('.btn.btn-sm.btn-outline-primary').contains('49').click()
    }




}
export default new HomePage();