import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import "../styles/Loader.css";

import { UserContextProvider } from "../context/userContext";
import { ThemeDarkProvider } from "./App/components/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <ThemeDarkProvider>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </ThemeDarkProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
