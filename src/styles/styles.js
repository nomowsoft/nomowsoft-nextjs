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
    bg_100: "#fff",
    muted: "#f8f9fb",
    text: "#000",
    text_50: "#373737",
    text_100: "#5b5757",
    text_title: "#217371",
    shadow: "rgba(151, 151, 151, 0.16)",
    linear: "linear-gradient(to bottom, #fff -11%, #fcfaff)",
    linear_50:
      "linear-gradient(180deg,rgba(2,0,36,0) 0%,rgba(255,255,255,0.47102591036414565) 16%,rgba(255,255,255,1) 100% )",
  },
};

const dark = {
  colors: {
    primary: "#217371",
    secondary: "#e66b27",
    bg: "#2c3e50",
    bg_100: "#364553",
    muted: "#262626",
    text: "#fff",
    text_title: "#e66b27",
    text_50: "#fff",
    text_100: "#fff",
    shadow: "#2c3e50",
    linear: "linear-gradient(to bottom, #2c3e50 -11%, #263748)",
    linear_50:
      "linear-gradient(180deg,rgba(2,0,36,0) 0%,rgb(45 62 80 / 53%) 16%,rgb(45 62 80 / 94%) 100% )",
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
    font-family: Roboto, sans-serif;
    min-height: 100vh;
    direction: ${({ isRtl }) => {
      return isRtl ? "rtl" : "ltr";
    }}
  }

  body,
  .scroll-y {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body::-webkit-scrollbar-track,
  .scroll-y::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body::-webkit-scrollbar,
  .scroll-y::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  body::-webkit-scrollbar-thumb,
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
    font-family: Cairo, sans-serif;
  }
`;

export { devices, breakpoints, GlobalStyle, dark, light };
