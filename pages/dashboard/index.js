import React from 'react';
import Head from 'next/head';
import { Loader } from 'components';
import App from 'app';
import { Layout } from 'app/layout/index';
import { useUserContext } from 'context/userContext';

function Dashboard() {
  const { user, loading } = useUserContext();

  return (
    <div>
      <Head>
        <title>edTeach - Asosiy sahifa</title>
      </Head>
      {loading ? <Loader /> : <> {user ? <App /> : <Layout />}</>}
    </div>
  );
}

export default Dashboard;
