

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/todo',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const projeto = config.env.projeto;

      if (projeto === "A") {
        config.baseUrl = 'https://example.cypress.io/commands/actions', 'https://example.cypress.io/commands/aliasing';
        config.specPattern = "cypress/e2e/2-advanced-examples/**/*.cy.js";
      }

      if (projeto === "B") {
        config.baseUrl = 'https://example.cypress.io/todo';
        config.specPattern = "cypress/e2e/1-getting-started/**/*.cy.js";
      }

      if (projeto === "smoke") {
        config.baseUrl = 'https://example.cypress.io/todo';
        config.specPattern = "cypress/e2e/smoke/**/*.cy.js";
      }

      return config;
    }
  }
});

//Com está configuração deve ser executados os testes com esses comandos.
//npx cypress run --env projeto=A
//npx cypress run --env projeto=B
//npx cypress run --env projeto=smoke

//ou 

//npx cypress open --env projeto=A
//npx cypress open --env projeto=B
//npx cypress open --env projeto=smoke

//ou um de cada vez 

//npx cypress run --spec "cypress/e2e/smoke/**/*.cy.js"
//npx cypress run --spec "cypress/e2e/1-getting-started/**/*.cy.js"
//npx cypress run --spec "cypress/e2e/2-advanced-examples/**/*.cy.js"

