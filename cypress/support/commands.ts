// get by test attribute command from best practices
Cypress.Commands.add(
  "getByTestId",
  (
    selector: string,
    options: Partial<
      Cypress.Loggable &
        Cypress.Timeoutable &
        Cypress.Withinable &
        Cypress.Shadow
    >
  ) => cy.get(`[data-testid=${selector}]`, options)
);

// get by test attribute starts with
Cypress.Commands.add(
  "getByTestIdStartsWith",
  (
    selector: string,
    options: Partial<
      Cypress.Loggable &
        Cypress.Timeoutable &
        Cypress.Withinable &
        Cypress.Shadow
    >
  ) => cy.get(`[data-testid^=${selector}]`, options)
);
