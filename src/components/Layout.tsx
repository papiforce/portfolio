import { ReactNode } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import { media } from "../utils/mediaQueries";
import Theme from "../utils/Theme";

import Navbar from "./Navbar";
import Footer from "./Footer";

type MetaData = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  canonicalUrl?: string;
  themeColor?: string;
  lang?: string;
};

type LayoutType = {
  children: ReactNode;
  metadata?: MetaData;
};

const Container = styled.main`
  ${({ theme: { screens } }) => `
    max-width: ${screens.tablet}px;
  `}

  ${media(Theme).tablet} {
    padding: 72px 12px 0;
  }

  width: 100vw;
  min-height: 100dvh;
  padding: 88px 0px 0;
  margin: 0 auto;
`;

const Layout = ({ children, metadata = {} }: LayoutType) => {
  const {
    title = "Emmanuel Kasomo | Portfolio",
    description = "Portfolio de développeur spécialisé en Typescript et React (Next)",
    keywords = "portfolio, développeur, frontend, backend, fullstack, javascript, typescript, styled components, tailwind, react, react native, next, vue, node, express, strapi, nest, php, symfony, python, flask, fastapi, mysql, postgresql, mongodb, docker, figma",
    ogImage = "/assets/projects/portfolio/portfolio-cover.png",
    ogTitle = "Emmanuel Kasomo | Portfolio",
    ogDescription = "Portfolio de développeur spécialisé en Typescript et React (Next)",
    ogUrl = "https://emmanuel-kasomo.vercel.app/",
    twitterCard = "/assets/projects/portfolio/portfolio-cover.png",
    canonicalUrl,
    themeColor = "#4682B4",
  } = metadata;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content={themeColor} />

        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />
        <meta name="twitter:image" content={ogImage} />

        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <Navbar />
      <Container>{children}</Container>
      <Footer />

      <Analytics />
    </>
  );
};

export default Layout;
