import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Header, Footer } from "../molecules";
import styled from "styled-components";

const PageTemplate = (props) => {
  const { children, title, data } = props;

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content="nomow soft" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Header />
      <main>{children && children}</main>
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
