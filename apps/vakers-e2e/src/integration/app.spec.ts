import { getGreeting } from '../support/app.po';

describe('vakers', () => {
  const vakiHomeUrl = '/';
  const vakiTestUrl = 'vaki/estoy-con-bahia-solano';

  it('Open home ', () => {
    cy.visit(vakiHomeUrl);
    const homeSelector = 'vaki-challenge-home';
    const homeObj = cy.get(homeSelector);
    homeObj.should('be.visible');
  });

  it('Should open vaki', () => {
    const vakiBtnSelector =
      'vaki-challenge-home > div > mat-card:nth-child(1) > mat-card-actions > a';
    const vakiBtn = cy.get(vakiBtnSelector);
    vakiBtn.click();
    cy.wait(5000);
    const vakiSelector = '.vaki-photo';
    cy.get(vakiSelector);
  });

  it('Should add to cart', () => {
    cy.visit(vakiTestUrl);
    const addCartSelector = 'mat-card:nth-child(1) > mat-card-actions > button';
    const addCartBtn = cy.get(addCartSelector);
    addCartBtn.click();

    const shoppingCartBtnSelector =
      'vaki-challenge-shopping-cart > div > button > span.mat-button-wrapper > mat-icon';
    cy.get(shoppingCartBtnSelector);
  });

  it('Should remove from cart', () => {
    cy.visit(vakiTestUrl);
    const addCartSelector = 'mat-card:nth-child(1) > mat-card-actions > button';
    const addCartBtn = cy.get(addCartSelector);
    addCartBtn.click();
    cy.screenshot('removedFromCartAdded');

    const shoppingCartBtnSelector =
      'vaki-challenge-shopping-cart > div > button > span.mat-button-wrapper > mat-icon';
    const shoppingCartBtn = cy.get(shoppingCartBtnSelector);
    shoppingCartBtn.click();
    cy.screenshot('removedFromCartShowCart');

    const removeBtnSelector =
      'vaki-challenge-shopping-cart > mat-card > mat-card-content > mat-list > mat-list-item > div > button';
    const removeBtn = cy.get(removeBtnSelector);
    removeBtn.click();
    cy.screenshot('removedFromCartEnd');
  });
});
