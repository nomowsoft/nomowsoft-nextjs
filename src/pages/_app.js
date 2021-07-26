import { ColorProvider } from "styles/useTheme";
import { GlobalStyle } from "styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default MyApp;
