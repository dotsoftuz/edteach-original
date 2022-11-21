import React from "react";
import { Footer, Navbar } from "../../components";
import { useUserContext } from "../../context/userContext";
import { SignIn, SignUp } from "../../components";

function Registration(props) {
  const { registry } = useUserContext();
  return (
    <div>
      <Navbar />
      {registry ? <SignUp /> : <SignIn />}
      <Footer />
    </div>
  );
}

export default Registration;
