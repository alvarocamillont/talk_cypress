describe('A home da minha aplicação', function () {
  it('apresenta o título da aplicação', function () {
    cy.visit('http://localhost:4200/');
    cy.get('.po-page-header-title').should('contain.text', 'Pessoas');
  });

  it('mostra uma grid com o Rogerio', function () {
    cy.visit('http://localhost:4200/');
    cy.get(':nth-child(2) > .po-table-row > :nth-child(2) > .po-table-column-cell > span').should('contain.text', 'Rogerio');
  });

  it('ao pesquisar o Fabio mostra ele selecionado', function () {
    cy.visit('http://localhost:4200/');
    cy.get('.po-input').type('Fabio{enter}');
    cy.get(':nth-child(2) > .po-table-column-cell > span').should('contain.text', 'Fabio')
  });

  it('no botão carregar mais resultados deve apresentar o restante da grid', function () {
    cy.visit('http://localhost:4200/');
    cy.get('.po-offset-xl-4 > .po-button').click()
    cy.get(':nth-child(14) > .po-table-row > :nth-child(2) > .po-table-column-cell > span').should('contain.text', 'Leonardo');
  });

})