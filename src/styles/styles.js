import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: 280, // z-filp
  sm: 374, // iphone x
  md: 413, // iphone 7 plus
  lg: 767, // ipad
  xl: 1023, // ipad pro
  xxl: 1300, // laptop
  xxxl: 1699, // other
};
const devices = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
  xxxl: `(min-width: ${breakpoints.xxxl}px)`,
};

const light = {
  colors: {
    primary: "#217371",
    secondary: "#e66b27",
    bg: "#fff",
    muted: "#f8f9fb",
    text: "#000",

    gray_100: "#00000014",
    gray_200: "#373737",
  },
};

const dark = {
  colors: {
    primary: "#217371",
    secondary: "#e66b27",
    bg: "#000",
    muted: "#262626",
    text: "#fff",
    gray_100: "#373535",
    gray_200: "#373737",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme?.colors.bg};
    color: ${({ theme }) => theme?.colors.text};
    font-family: Cairo, Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-height: 100vh;
    direction: ${({ isRtl }) => {
      return isRtl ? "rtl" : "ltr";
    }}
  }

  .scroll-y {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .scroll-y::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .scroll-y::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  .scroll-y::-webkit-scrollbar-thumb {
    background-color: rgba(120, 137, 160, 0.2);
    border-radius: 4px;
    width: 6px;
  }

  .scroll-x {
    overflow-x: auto !important;
  }

  .scroll-x::-webkit-scrollbar-track {
    background-color: #fff;
  }

  .scroll-x::-webkit-scrollbar {
    background-color: #fff;
    height: 5px;
  }

  .scroll-x::-webkit-scrollbar-thumb {
    background-color: #eee;
    border: 2px solid #eee;
    border-radius: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  [lang=ar] body {
    direction: rtl;
  }
`;

export { devices, breakpoints, GlobalStyle, dark, light };
