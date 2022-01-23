declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      FACEBOOK_ID: string;
      FACEBOOK_SECRET: string;
      JWT_SECRET: string;
      NEXTAUTH_URL: string;
      USER_TOKEN: string;
    }
  }
}

export {}
