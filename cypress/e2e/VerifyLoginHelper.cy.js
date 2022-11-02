/// <reference types="cypress" />

import HomePage from '../support/HomePage'
import user from '../fixtures/user.json'
import {login, loginViaApi} from '../support/Helper'



beforeEach('login', () => {
   //login();
   loginViaApi(user);
  })


it('Login via Api', {retries: 2},  () => {
    HomePage.visit()
    HomePage.getProfileButton().should('be.visible');
  })