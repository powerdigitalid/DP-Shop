//make get chart user_google by api order/cart
import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Chart() {
    const { data: session, status } = useSession();
    //api chart by user_google "/api/order/getUserCart?user_google=" + session.user.email
    const [cart, setCart] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/order/getUserCart?user_google=" + session.user.email);
            const data = await res.json();
            setCart(data);
        };
        fetchData();
    }, [session]);
    // if (status === "loading") {
    //     return <h1>Loading...</h1>;
    // }
    // if (status === "unauthenticated") {
    //     signIn();
    //     return <h1>Loading...</h1>;
    // }
    // if (status === "authenticated") {
    //     if (session.user.role === "admin") {
    //         router.push("/admin");
    //     }
    // } else {
    //     router.push("/");
    // }



  return (
    <div className="container-fluid pt-5" id="chart">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img
                    src="/landingpage/img/product-1.jpg"
                    alt
                    style={{ width: 50 }}
                  />{" "}
                  {cart.product_name}
                </td>
                <td className="align-middle">{cart.product_price}</td>
                <td className="align-middle">
                  <div
                    className="input-group quantity mx-auto"
                    style={{ width: 100 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm bg-secondary text-center"
                      defaultValue={1}
                      value={cart.quantity}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">{cart.total}</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Ringkasan Pemesanan</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Total</h6>
                <h6 className="font-weight-medium">Rp. 600.000</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">Rp. 635.000</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
