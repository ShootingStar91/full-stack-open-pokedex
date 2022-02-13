/// <reference types="cypress" />

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single pokemon page works', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="ivysaur"]').click()
    cy.get('*[class^="pokemon-abilities"]')
    .get('*[class^="pokemon-ability"]')
    .get('*[class^="pokemon-ability-name"]').contains('chlorophyll')
  })
})
