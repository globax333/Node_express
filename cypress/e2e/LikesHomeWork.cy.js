/// <reference types="cypress" />

import HomePage from '../support/HomePage';
import user from '../fixtures/user.json';
import {loginViaApi} from '../support/Helper';
import ArticlesLike from '../fixtures/ArticlesLike.json';



beforeEach('login', () => {
    cy.intercept('GET', '**/articles?limit=10&offset=0', ArticlesLike )
   loginViaApi(user);
  })


it('Login via Api', () => {
    HomePage.visit()
    HomePage.getGolobalFeed().click();
    HomePage.getLikes().should('contain', '50')
    HomePage.DecreaseLikes().should('contain', '49')
    HomePage.IncreaseLikes().should('contain', '50')
  })
