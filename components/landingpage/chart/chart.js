import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
 
export default function Chart() {
  const { data: session, status } = useSession();
  const [order, setOrder] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleOrder = () => {
    fetch("/api/order/orderGetUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_google: session.user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setData(data.cart);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (session && session.user) {
      handleOrder();
    }
  }, [session]);
  

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
                  Colorful Stylish Shirt
                </td>
                <td className="align-middle">Rp. 200.000</td>
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
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">Rp. 200.000</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="align-middle">
                  <img
                    src="/landingpage/img/product-2.jpg"
                    alt
                    style={{ width: 50 }}
                  />{" "}
                  Colorful Stylish Shirt
                </td>
                <td className="align-middle">Rp. 200.000</td>
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
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">Rp. 200.000</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="align-middle">
                  <img
                    src="/landingpage/img/product-3.jpg"
                    alt
                    style={{ width: 50 }}
                  />{" "}
                  Colorful Stylish Shirt
                </td>
                <td className="align-middle">Rp. 200.000</td>
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
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">Rp. 200.000</td>
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
          <h4 className="">
            <i className="fas fa-wallet"></i> Pembayaran
          </h4>
          <br />
          <h5>BCA : ...</h5>
          <h5>BRI : ...</h5>
          <h5>BNI : ...</h5>
          <div className="d-flex mb-4 mt-4">
            <p className="text-dark font-weight-medium mb-0 mr-3">Ekspedisi:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  JNT
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  JNE
                </label>
              </div>
            </form>
          </div>
          <h4>Alamat</h4>
          <input type="text" className="form-control mb-2" placeholder="Alamat Anda" />
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Ringkasan Pemesanan</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Total</h6>
                <h6 className="font-weight-medium">Rp. 600.000</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Pemgiriman</h6>
                <h6 className="font-weight-medium">Rp. 35.000</h6>
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
