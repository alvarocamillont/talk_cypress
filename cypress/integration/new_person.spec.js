/// <reference types="Cypress" />

describe('A página de nova pessoa ', function() {
  it('deve incluir umm novo registro', function() {
    cy.visit('http://localhost:4200/');
    cy.get('.po-page-list-actions > po-button > .po-button').click();
    cy.url().should('include', '/people/new');
    cy.get(
      '[ng-reflect-name="name"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type('Alvaro');
    cy.get(
      'po-datepicker.po-sm-12 > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type('06/11/1987');
    cy.get(':nth-child(2) > .po-radio-group-label').click();
    cy.get(
      '[ng-reflect-name="street"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type('Rua do Alvaro');
    cy.get(
      '[ng-reflect-name="city"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type('São Paulo');
    cy.get(
      '[ng-reflect-name="country"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type('Brasil');
  });
});
