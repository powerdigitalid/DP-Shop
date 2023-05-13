import Link from "next/link";
import React from "react";

export default function Detailpemesanan() {
  return (
    <div className="pt-5" id="chart">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img
                    src="/landingpage/img/product-1.jpg"
                    alt
                    style={{ width: 50 }}
                  /><br />
                  <span className="ml-3">Colorful Stylish Shirt</span>
                </td>
                <td className="align-middle">Rp. 300.000</td>
                <td className="align-middle">2</td>
                <td className="align-middle">Rp. 300.000</td>
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
          <p>Jl Kh. Hasyim Ash`ary Nomor 10</p>
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
              <Link href="/admin/pemesanan" className="btn btn-block btn-primary my-3 py-3">
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
