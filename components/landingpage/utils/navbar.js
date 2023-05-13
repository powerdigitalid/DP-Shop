import React from "react";
import Banner from "./banner";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  if (session){
    return (
      <div>
        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 mr-2 pr-3">
                <a href className="text-decoration-none d-block d-lg-none">
                  <h1 className="m-0 display-5 font-weight-semi-bold">
                    <span className="text-primary font-weight-bold border px-3 mr-1">
                      DP
                    </span>
                    Shop
                  </h1>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <Link href="/" className="nav-item nav-link active">
                      Home
                    </Link>
                    <Link href="/landingpage/allproduct#allproduct" className="nav-item nav-link">
                      All Product
                    </Link>
                    <Link href="/#discount" className="nav-item nav-link">
                      Discount
                    </Link>
                    <Link href="/#footer" className="nav-item nav-link">
                      Contact
                    </Link>
                  </div>
                  <div >
                    <button onClick={() => signOut()} className="btn btn-block border-2" >Sign Out</button>
                  </div>
                  <div className="navbar-nav ml-2 ">
                    <div className="nav-item ml-2">
                      < img src={session.user.image} alt="user" className="rounded-circle" width="40" height="40" />
                    </div>
                  </div>
                  
                </div>
              </nav>
              <Banner/>
            </div>
          </div>
        </div>
      </div>
    );
  } else{
    return (
      <div>
        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href className="text-decoration-none d-block d-lg-none">
                  <h1 className="m-0 display-5 font-weight-semi-bold">
                    <span className="text-primary font-weight-bold border px-3 mr-1">
                      DP
                    </span>
                    Shop
                  </h1>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <Link href="/" className="nav-item nav-link active">
                      Home
                    </Link>
                    <Link href="/landingpage/allproduct#allproduct" className="nav-item nav-link">
                      All Product
                    </Link>
                    <Link href="/#discount" className="nav-item nav-link">
                      Discount
                    </Link>
                    <Link href="/#footer" className="nav-item nav-link">
                      Contact
                    </Link>
                  </div>
                  <div className="navbar-nav ml-auto py-0">
                    <Link href="/landingpage/login" className="nav-item nav-link">
                      Login
                    </Link>
                  </div>
                </div>
              </nav>
              <Banner/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
