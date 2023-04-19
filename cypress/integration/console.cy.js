import { appConfig } from "../appConfig";
import "cypress-keycloak";

describe('CONSOLE TEST', () => {
  it('passes', () => {
    cy.log("login to keycloak");
    cy.login({
      root: "https://dev1-upper-austria.ventuscloud.eu:9443",
      realm: "ventus",
      username: "qa43test@gmail.com",
      password: "a72-pt7!SEC4=r97",
      client_id: "ventus",
      redirect_uri: "https://dev.ventuscloud.eu"
    });

    cy.log("setup hubspot cookie");
    cy.setCookie("__hs_opt_out", "no");

    cy.visit('https://dev.ventuscloud.eu/')
    cy.getByTestId("table-container").should("be.visible");
  })
})