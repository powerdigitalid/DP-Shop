import Link from "next/link";
import React from "react";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Detailpemesanan() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleDetail = async () => {
    try {
      const res = await fetch("/api/order/getOrder?id=" + id)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      setData(json.data[0])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) handleDetail()
  }, [id])

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
                    // src={data.cart.product.product_img}
                    style={{ width: 50 }}
                  />
                  <span className="ml-3">{data.cart?.product?.product_name}</span>
                </td>
                <td className="align-middle">Rp.{data.cart?.product?.product_price}</td>
                <td className="align-middle">{data.cart?.quantity}</td>
                <td className="align-middle">Rp.{data.cart?.total}</td>
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
            <p className="text-dark font-weight-medium mb-0 mr-3">Ekspedisi: {data.expedisi}</p>
            
          </div>
          <h6>Alamat</h6>
          <h4>{data.address}</h4>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Ringkasan Pemesanan</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Total</h6>
                <h6 className="font-weight-medium">Rp.{data.total}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Pemgiriman</h6>
                <h6 className="font-weight-medium">Rp. 35.000</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">Rp.{data.total}</h5>
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
