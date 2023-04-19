export type AppConfig = {
    keycloak: {
      url: string;
      realm: string;
      clientId: string;
      redirectUri: string;
    };
    testData: {
      username: string;
      password: string;
      projectRegion: string;
    };
  };