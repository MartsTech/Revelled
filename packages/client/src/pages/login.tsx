import Page from "layouts/page";
import Login from "modules/login";
import type { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <Page title={"Login | Revelled"}>
      <Login />
    </Page>
  );
};

export default LoginPage;
