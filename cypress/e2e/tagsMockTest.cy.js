/// <reference types="cypress" />

import HomePage from '../support/HomePage'
import user from '../fixtures/user.json'
import {login, loginViaApi} from '../support/Helper'
import tags from '../fixtures/TagsMock.json'



beforeEach('login', {retries: 2}, () => {
   loginViaApi(user);
  })


it('Login via Api', {retries: 2},  () => {
    HomePage.visit()
    HomePage.getProfileButton().should('be.visible');
  })

  //1.24