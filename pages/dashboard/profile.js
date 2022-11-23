import React from "react";
import Head from "next/head";

import { Sidebar, Breadcrumb } from "../../components";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>edTeach - Kurslar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <div className="p-5">
        <Breadcrumb page="Profil" link="/profile" />
        </div>
      </Sidebar>
    </div>
  );
};

export default Profile;
