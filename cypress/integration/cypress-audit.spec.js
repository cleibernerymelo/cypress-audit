/// <reference types="Cypress" />

describe('Medir desempenho das categorias do lighthouse', () => {
  it('Todas as categorias', () => {
    cy.visit('/');
    cy.lighthouse();
    //cy.pa11y();
  });

  it('Categorias Performance e SEO', () => {
    const thresholds = {
      performance: {
         "first-contentful-paint": 800,
         "time-to-interactive": 800
      },
      seo: 80
    };

    const lighthouseConfig = {
      emulatedFormFactor: 'mobile',
    };

    cy.visit('/');
    cy.lighthouse(thresholds, lighthouseConfig);
  });
});
