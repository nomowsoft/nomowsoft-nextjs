import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: 280, // z-filp
  sm: 377, // iphone x
  md: 415, // iphone 7 plus
  lg: 770, // ipad
  xl: 1025, // ipad pro
  xxl: 1400, // other
};

const light = {
  colors: {
    text: "#0f1419",
    muted: "#f8f9fb",
    primary: "#fff",
    shadow: "#b6b6b6",
    gray: "#c8c5c5",
    blue: "#1da1f2",
  },
};

const dark = {
  colors: {
    text: "#fff",
    muted: "#262626",
    primary: "#000",
    shadow: "#373535",
    gray: "#c8c5c5",
    blue: "#47a1eb",
  },
};

const mediaQuery = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme?.colors.muted};
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

  [lang=ar] body {
    direction: rtl;
  }
`;

export { mediaQuery, GlobalStyle, dark, light };
