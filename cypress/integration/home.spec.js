/// <reference types="Cypress" />

describe("A home da minha aplicação", function () {
  it("apresenta o título da aplicação", function () {
    cy.visit("http://localhost:4200/");
    cy.get(".po-page-header-title").should("contain.text", "Pessoas");
  });

  it("mostra uma grid com o Ronaldo", function () {
    cy.visit("http://localhost:4200/");
    cy.get(
      ":nth-child(2) > .po-table-row > :nth-child(2) > .po-table-column-cell > span"
    ).should("contain.text", "Ronaldo");
  });

  it("ao pesquisar o Leonardo mostra ele selecionado", function () {
    cy.visit("http://localhost:4200/");
    cy.get(".po-field-container-content > .po-input").type("Leonardo{enter}");
    cy.get(":nth-child(2) > .po-table-column-cell > span").should(
      "contain.text",
      "Leonardo"
    );
  });

  it("no botão carregar mais resultados deve apresentar o restante da grid", function () {
    cy.visit("http://localhost:4200/");
    cy.get(".po-offset-xl-4 > .po-button").click();
    cy.get(
      ":nth-child(14) > .po-table-row > :nth-child(2) > .po-table-column-cell > span"
    ).should("contain.text", "Flavio");
  });
});
