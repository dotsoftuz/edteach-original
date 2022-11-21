import React from "react";
import { Footer, Navbar } from "../../components";
import { useUserContext } from "../../context/userContext";
<<<<<<< HEAD
import {SignIn, SignUp} from "../../components";
=======
import { SignIn, SignUp } from "../../components";
>>>>>>> a111fa781ad9150c7b94b1b4178528e350163136

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

