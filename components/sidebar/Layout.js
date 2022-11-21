import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto">
        <Sidebar>
          <div>this is dashboard home page</div>
        </Sidebar>
      </div>
    </>
  );
};

export default Layout;
