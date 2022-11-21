<<<<<<< HEAD
import React from "react";
import { Footer, Navbar } from "../../components";
import Loader from "../../components/Loader/Loader";
import { useUserContext } from "../../context/userContext";
import App from "../App";
import Registration from "../registration";
=======
import React from 'react';
import { Footer, Navbar, Loader } from '../../components';
import { useUserContext } from '../../context/userContext';
import App from '../../app';
import Registration from '../../app/layout/index';

>>>>>>> fec7a23407ab79306ff41b6f6dee99d54316d345

function Dashboard(props) {
  const { user, loading } = useUserContext();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {loading ? <Loader /> : <> {user ? <App /> : <Registration />}</>}
    </div>
  );
}

export default Dashboard;
