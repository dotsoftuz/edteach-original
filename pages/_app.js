import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import "../styles/Loader.css";

import { UserContextProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default appWithTranslation(MyApp);
