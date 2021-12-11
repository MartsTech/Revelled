import Login from "modules/login";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Revelled</title>
      </Head>
      <Login />
    </>
  );
};

export default HomePage;
