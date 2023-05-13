import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href="/dist/img/logo/logos.png" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <Navbar />
          <Sidebar />
          <div className="main-content" style={{ minHeight: "530" }}>
            <section className="section">{children}</section>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}