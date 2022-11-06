/// <reference types="cypress" />

import HomePage from '../support/HomePage';
import user from '../fixtures/user.json';
import {loginViaApi} from '../support/Helper';
import tagsArray from '../fixtures/TagsMock.json';
import {faker} from '@faker-js/faker';


beforeEach('login', () => {
  tagsArray.tags = [`${faker.animal.bear.name}`, `${faker.animal.cow.name}`]

  cy.intercept('GET', '**/tags', tagsArray )
   loginViaApi(user);
  })


it('Login via Api', () => {
    HomePage.visit()
    HomePage.getProfileButton().should('be.visible');
    HomePage.getTagsList().should('contain', tagsArray.tags[0]);
    HomePage.getTagsList().should('contain', tagsArray.tags[1]);
  })

  