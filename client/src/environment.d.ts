declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_PLACES_API_KEY: string;
      REACT_APP_AUTH0_DOMAIN: string;
      REACT_APP_AUTH0_CLIENT_ID: string;
      REACT_APP_AUTH0_AUDIENCE: string;
    }
  }
}

export {};
