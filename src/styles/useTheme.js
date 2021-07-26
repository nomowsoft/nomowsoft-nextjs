import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "styles/styles";

const ColorContext = React.createContext();

const ColorProvider = (props) => {
  const router = useRouter();
  const [theme, setTheme] = React.useState("light");
  const isRtl = router.locale === "ar";

  function toggleTheme() {
    const current = theme === "light" ? "dark" : "light";
    setTheme(current);
    if (localStorage) localStorage.setItem("nomow-theme", current);
  }

  React.useEffect(() => {
    const currentTheme = localStorage
      ? localStorage.getItem("nomow-theme")
      : "light";
    setTheme(currentTheme);
  }, []);

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={theme === "dark" ? { ...dark, isRtl } : { ...light, isRtl }}
      >
        {props.children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

const useMode = () => React.useContext(ColorContext);

export { ColorProvider, useMode };
