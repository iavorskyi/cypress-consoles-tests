import { isNull } from "./typeGuards/isNull";
import { isUndefined } from "./typeGuards/isUndefined";
import { AppConfig } from "./types";

const getAppConfig = (): AppConfig => {
  if (isNull(Cypress.config().baseUrl)) {
    throw Error(
      `Environment configuration is invalid. Value for CYPRESS_BASE_URL variable is missing.`
    );
  }

  [
    "KEYCLOAK_URL",
    "KEYCLOAK_REALM",
    "KEYCLOAK_CLIENT_ID",
    "KEYCLOAK_REDIRECT_URI",
    "TEST_USERNAME",
    "TEST_PASSWORD",
    "TEST_PROJECT_REGION"
  ].forEach((x) => {
    if (isUndefined(Cypress.env(x))) {
      throw Error(
        `Environment configuration is invalid. Value for CYPRESS_${x} variable is missing.`
      );
    }
  });

  return {
    keycloak: {
      url: Cypress.env("KEYCLOAK_URL") as string,
      realm: Cypress.env("KEYCLOAK_REALM") as string,
      clientId: Cypress.env("KEYCLOAK_CLIENT_ID") as string,
      redirectUri: Cypress.env("KEYCLOAK_REDIRECT_URI") as string
    },
    testData: {
      username: Cypress.env("TEST_USERNAME") as string,
      password: Cypress.env("TEST_PASSWORD") as string,
      projectRegion: Cypress.env("TEST_PROJECT_REGION") as string
    }
  };
};

export const appConfig = getAppConfig();
