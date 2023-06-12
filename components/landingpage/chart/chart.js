import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Chart() {
  const { data: session, status } = useSession();
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  const calculateTotal = (type) => {
    let total = 0;
    if (type === "cart") {
      cart.forEach((item) => {
        total += item.total;
      });
      setCartTotalPrice(total);
    } else if (type === "order") {
      total = cartTotalPrice + order.shipping;
      setOrder({ ...order, total: total });
    }
  }

  const handleUpdateQtybyId = (e, id, quantity) => {
    e.preventDefault();
    let newCart = [...cart];
    let item = newCart.find((item) => item.id === id);
    item.quantity = quantity;
    item.total = item.product.product_price * quantity;
    // replace item in new cart
    let index = newCart.findIndex((item) => item.id === id);
    newCart[index] = item;
    setCart(newCart);
    calculateTotal("cart");
  };

  const handleGetCart = () => {
    fetch("/api/chart/getUserCart?user_google=" + session.user.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

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
    
  const handleState = (e) => {
    e.preventDefault();
    fetch("/api/chart/state", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status: status}),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        } else {
          console.log(res);
        }
      });
  }
  const handleSetOrder = (e) => {
    e.preventDefault();
    if (session && session.user && order.address) {
      let insert_data = [];
      cart.forEach((item) => {
        insert_data.push({
          cart_id: item.id,
          order_date: new Date(),
          address: order.address,
          expedisi: order.expedisi,
          shipping: order.shipping,
          name_user: session.user.name,
          user_google: item.user_google,
          total: cartTotalPrice,
        });
      });
      fetch("/api/order/create?type=bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ insert: insert_data }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            alert('Order berhasil!')
            handleState(e);
            router.push("/");
          } else {
            alert("Gagal checkout");
          }
        });
    }
  }

  useEffect(() => {
    if (session && session.user) {
      if (cart.length === 0) handleGetCart();
      setTimeout(() => {
        calculateTotal('cart');
        calculateTotal('order');
      }, 1000);
      setOrder({ ...order});
    }
  }, [session, order.shipping, cartTotalPrice]);

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
                          onClick={(e) => handleUpdateQtybyId(e, item.id, (item.quantity - 1))}
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
                          onClick={(e) => handleUpdateQtybyId(e, item.id, (item.quantity + 1))}
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
                  onClick={() => setOrder({ ...order, expedisi: 'JNT', shipping: 35000 })}
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
                  onClick={() => setOrder({ ...order, expedisi: 'JNE', shipping: 30000 })}
                />
                <label className="custom-control-label" htmlFor="color-2">
                  JNE
                </label>
              </div>
            </form>
          </div>
          <h4>Alamat</h4>
          <input type="text" className="form-control mb-2" placeholder="Alamat Anda" onChange={(e) => setOrder({ ...order, address: e.target.value })} />
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Ringkasan Pemesanan</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Total</h6>
                <h6 className="font-weight-medium">Rp. {cartTotalPrice}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Pengiriman</h6>
                <h6 className="font-weight-medium">Rp. {order.shipping}</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">Rp. {order.total? order.total : '-'}</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3" onClick={handleSetOrder}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
