import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

interface PageProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}

const Page: FC<PageProps> = ({
  children,
  title = "Revelled",
  image,
  description,
  keywords,
}) => {
  const router = useRouter();

  const domain = "https://revelled.vercel.app";
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        {url && <link href={canonical} rel="canonical" />}

        {/*Facebook Meta Tags */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Page;
