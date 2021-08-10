import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Header, Footer } from "../molecules";

const PageTemplate = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="nomow soft" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Header />
      <main>{children && children}</main>
      <Footer />
    </>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default PageTemplate;
