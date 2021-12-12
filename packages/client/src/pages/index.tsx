import Page from "layouts/page";
import Login from "modules/login";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Page
      title={"Login | Revelled"}
      description={
        "Login in Revelled, a platform for organizing and maniging events."
      }
      image={"/favicons/icon-512x512.png"}
    >
      <Login />
    </Page>
  );
};

export default HomePage;
