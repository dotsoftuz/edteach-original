import React from "react";

import { Navbar, Footer } from "../";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
