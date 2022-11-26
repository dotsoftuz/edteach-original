import { useState, useEffect } from 'react';
import Head from 'next/head';

import { Header, About, Navbar, Price, Contact, Footer } from 'components';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div>
      <Head>
        <title>Ed Teach</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <About />
        <Price />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
