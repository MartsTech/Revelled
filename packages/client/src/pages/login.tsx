import Page from "layouts/page";
import Login from "modules/login";
import type { NextPage } from "next";
import { getProviders } from "next-auth/react";
import type { AuthProviders } from "types/auth";

interface LoginPageProps {
  providers: AuthProviders;
}

const LoginPage: NextPage<LoginPageProps> = ({ providers }) => {
  return (
    <Page title={"Login | Revelled"}>
      <Login providers={providers} />
    </Page>
  );
};

export default LoginPage;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
