import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Chart() {
  const { data: session, status } = useSession();
  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user) {
        const res = await fetch(
          "/api/chart/getUserCart?user_google=" + session.user.email
        );
        const data = await res.json();
        setCart(data);
        if (data && data.length > 0) {
          calculateTotal(data);
        }
      }
    };
    fetchData();
  }, [session]);

  const calculateTotal = (cartData) => {
    let totalAmount = 0;
    cartData.forEach((item) => {
      totalAmount += item.total;
    });
    setTotals(totalAmount);
  };


  const handleDelete = async (id) => {
    fetch(`/api/chart/delete?id=${id}`, {
      method: "DELETE",
    })
    .then((res)=> res.json())
    .then((res) => {
      if (res.data) {
        alert("delete oke")
      } else {
        alert("Gagal menghapus produk");
      }
    })
  };

  


  return (
    <div className="container-fluid pt-5" id="chart">
      {/* Render cart items */}
      {cart.length > 0 ? (
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
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src="/landingpage/img/product-1.jpg"
                        alt=""
                        style={{ width: 50 }}
                      />
                      {item.product.product_name}
                    </td>
                    <td>{item.product.product_price}</td>
                    <td>
                      <div className="input-group quantity mx-auto">
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>{item.total}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
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
                  <h6 className="font-weight-medium">Rp.{totals}</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total Semua</h5>
                  <h5 className="font-weight-bold">Rp. {totals}</h5>
                </div>
                <button className="btn btn-block btn-primary my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
