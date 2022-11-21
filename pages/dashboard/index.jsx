import React from "react";
import { Footer, Navbar } from "../../components";
import Loader from "../../components/Loader/Loader";
import { useUserContext } from "../../context/userContext";
import App from "../App";
import Registration from "../registration";

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
