import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Topbar() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({orders: 0});
  const [loading, setLoading] = useState(false);



  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <p>Terimakasih telah berkunjung, Kunjungi juga sosial media kami di samping.</p>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-dark pl-2" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  DP
                </span>
                Shop
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            {/* <form action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form> */}
          </div>
          <div className="col-lg-3 col-6 text-right">
            <Link href="/landingpage/chart#chart" className="btn border">
              <i className="fas fa-shopping-cart text-primary" />
              <span className="badge"> {cart.orders} </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
