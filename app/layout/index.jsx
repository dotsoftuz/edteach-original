<<<<<<< HEAD:pages/registration/index.jsx
import React from "react";
import { Footer, Navbar } from "../../components";
import { useUserContext } from "../../context/userContext";
import SignIn from "./signin";
import SignUp from "./signup";
=======
import React from 'react';
import { Footer, Navbar } from '../../components';
import { useUserContext } from '../../context/userContext';
import SignIn from '../../components';
import SignUp from '../../components';
>>>>>>> fec7a23407ab79306ff41b6f6dee99d54316d345:app/layout/index.jsx

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
