import Page from "layouts/page";
import Login from "modules/login";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Page title={"Login | Revelled"}>
      <Login />
    </Page>
  );
};

export default HomePage;
