/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FormInputProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImg, setProductImg] = useState(null);

  const handleProductImgChange = (e) => {
    setProductImg(e.target.files[0]);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("product_price", productPrice);
    formData.append("product_desc", productDesc);
    formData.append("product_img", productImg);

    fetch("/api/produk/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle response data
        // Clear form fields
        alert("Data berhasil diinput")
        setProductName("");
        setProductPrice("");
        setProductDesc("");
        setProductImg(null);
      })
      .catch((error) => {
        console.error(error);
        alert("error")
      });
  };

  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="author-box-left">
              <img
                alt="image"
                src= {`/upload/${productImg}`}
                className="rounded-circle author-box-picture"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleProductImgChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label>Nama Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm">Rp</span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="form-control form-control-sm">.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <label>Deskripsi</label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success" type="submit">
                    <i className="fas fa-plus fa-fw "></i> Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}