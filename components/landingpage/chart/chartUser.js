import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Chart() {
  const { data: session, status } = useSession();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
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
    setTotal(totalAmount);
  };

  const handleQuantityChange = async (id, quantity) => {
    try {
      const res = await fetch("/api/chart/update", {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Id: id,
          quantity: quantity,
          user_google: session.user.email,
        }),
      });
      const data = await res.json();
      setCart(data);
      calculateTotal(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/chart/delete?id=" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      setCart(data);
      calculateTotal(data);
      alert("Product deleted successfully");
    } catch (error) {
      alert("Failed to delete product");
      console.log(error);
    }
  };

  //handle button add checkout to all cart produk and user session
  

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
                {cart.map((carts) => (
                  <tr key={carts.id}>
                    <td>
                      <img
                        src="/landingpage/img/product-1.jpg"
                        alt=""
                        style={{ width: 50 }}
                      />
                      {carts.product.product_name}
                    </td>
                    <td>{carts.product.product_price}</td>
                    <td>
                      <div className="input-group quantity mx-auto">
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick = {() => handleQuantityChange(
                              carts.id,
                              carts.quantity - 1
                            )}
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={carts.quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick = {() => handleQuantityChange(
                              carts.id,
                              carts.quantity + 1
                            )}

                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>{carts.total}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleDelete(carts.id)}
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
                  <h6 className="font-weight-medium">Rp.{total}</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total Semua</h5>
                  <h5 className="font-weight-bold">Rp. {total}</h5>
                </div>
                <button className="btn btn-block btn-primary my-3 py-3" >
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
