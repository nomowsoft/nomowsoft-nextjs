import { ColorProvider } from "styles/useTheme";
import { GlobalStyle } from "styles/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default MyApp;
