declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    JWT_SECRET: string;
  }
}