//make get chart user_google by api order/cart
import React from "react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Chart() {
    const { data: session, status } = useSession();
    //tampilan dari button chart ditopbar berdasarkan user.email/user_google
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            if (session && session.user) {
                const res = await fetch("/api/chart/getUserCart?user_google=" + session.user.email);
                const data = await res.json();
                setCart(data);
                if (data && data.quantity && data.product && data.product.product_price) {
                    setTotal(data.quantity * parseInt(data.product.product_price));
                }
            }
        };
        fetchData();
    }, [session]);

    //delete cart


    const handleDelete = async (id) => {
        const res = await fetch("/api/chart/delete?id=" + id, {
            method: "DELETE",
        });
        const data = await res.json();
        setCart(data);
        if (data) {
            alert("delete oke")
        } else {
            alert("Gagal menghapus produk");
        }
    };
  

    

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
            {cart.length > 0 && cart.map((carts) => (
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img
                    src="/landingpage/img/product-1.jpg"
                    alt
                    style={{ width: 50 }}
                  />{" "}
                  {carts.product.product_name}
                </td>
                <td className="align-middle">{carts.product.product_price}</td>
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
                      value={carts.quantity}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus" >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">{carts.total}</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary" onClick={() => handleDelete(carts.id)}>
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
              
            </tbody>
            ))}
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
