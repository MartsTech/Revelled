import Page from "layouts/page";
import Login from "modules/login";
import type { NextPage } from "next";
import { getProviders } from "next-auth/react";
import type { AuthProviders } from "types/auth";

interface HomePageProps {
  providers: AuthProviders;
}

const HomePage: NextPage<HomePageProps> = ({ providers }) => {
  return (
    <Page title={"Login | Revelled"}>
      <Login providers={providers} />
    </Page>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
