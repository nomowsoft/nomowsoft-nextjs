/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Header, Footer } from "../molecules";
import styled from "styled-components";
import FloatingMenu from "../molecules/floatingMenu";

const PageTemplate = (props) => {
  const { children, title, data } = props;

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content="nomow soft" />
        <link rel="icon" href="/assets/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>{children && children}</main>
      <FloatingMenu data={data} />
      <Footer data={data} />
    </Container>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

const Container = styled.div`
  background: ${({ theme }) => theme?.colors.bg};
  color: ${({ theme }) => theme?.colors.text};
`;

export default PageTemplate;
