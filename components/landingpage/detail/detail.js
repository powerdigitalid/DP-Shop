import React from "react";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

export default function Detail() {
  //detail product by id product
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleDetailProduct = async (id) => {
    try {
      const res = await fetch(`/api/produk/${id}`)
      const json = await res.json()
      setData(json.data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      handleDetailProduct(id)
    }
  }, [id])
  return (
    <div className="container-fluid py-5" id="detail">
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
            <div className="border">
                <img
                  className="w-50 h-50"
                  src={data.product_img}
                  alt=""
                />
          </div>
        </div>
        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">{data.product_name}</h3>
          <h3 className="font-weight-semi-bold mb-4">Rp.{data.product_price}</h3>
          <p className="mb-4">
            {data.product_desc}
          </p>
          {/* <div className="d-flex align-items-center mb-4 pt-2">
            <div className="input-group quantity mr-3" style={{ width: 130 }}>
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary text-center"
                defaultValue={1}
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <button className="btn btn-primary px-3" href="/">
              <i className="fa fa-back mr-1" /> Kembali
            </button>
          </div> */}
          {/* button back to / */}
          <a href="/">
          <button className="btn btn-primary px-3">
         
            <i className="fa fa-back mr-1" /> Kembali

          </button>
          </a>
          <div className="d-flex pt-2">
            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
            <div className="d-inline-flex">
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
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
