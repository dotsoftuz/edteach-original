import React from "react";
import { Loader } from "../../components";
import { useUserContext } from "../../context/userContext";
import App from "../../app";
import {Layout} from "../../app/layout/index";

function Dashboard() {
  const { user, loading } = useUserContext();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>{loading ? <Loader /> : <> {user ? <App /> : <Layout />}</>}</div>
  );
}

export default Dashboard;
