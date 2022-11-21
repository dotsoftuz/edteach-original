import React from "react";
import { Footer, Navbar } from "../../components";
import { useUserContext } from "../../context/userContext";
<<<<<<< HEAD
import { SignIn, SignUp } from "../../components";
=======

import {SignIn, SignUp} from "../../components";
>>>>>>> 91bf1e34f1400048182c2bee0a49847ff06e154b

export function Layout() {
  const { registry } = useUserContext();
  return (
    <div>
      <Navbar />
      {registry ? <SignUp /> : <SignIn />}
      <Footer />
    </div>
  );
}
