import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://revelled.vercel.app/";

export const defaultSEO: DefaultSeoProps = {
  title: "Revelled",
  description:
    "A public event management and advertisement platform for interactive events.",
  canonical: baseUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Revelled",
    images: [
      {
        url: `${baseUrl}/icons/icon-512x512.png`,
        alt: "Revelled",
      },
    ],
  },
};
