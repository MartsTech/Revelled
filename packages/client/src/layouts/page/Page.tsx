import Head from "next/head";
import { FC } from "react";

interface PageProps {
  title?: string;
}

const Page: FC<PageProps> = ({ children, title = "Revelled" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
