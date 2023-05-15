/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {getCookie} from '../../../libs/cookie.lib.js'

export default function FormInputProduct() {
  const [image, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          alert("Upload image success");
          setImage(res.data);
        } else {
          alert("Upload image failed");
        }
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
        alert("Upload image failed");
      });
  };


  const clearData = () => {
    setImage("");
    setNameProduct("");
    setPrice("");
    setDescription("");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const dataProduct = {
      product_img: image,
      product_name: nameProduct,
      product_price: price,
      product_desc: description,
    };
    fetch("/api/produk/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": getCookie("token"),
      },
      body: JSON.stringify(dataProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          alert("Add product success");
          clearData();
          router.push("/adminpage/produk");
        } else {
          alert("Add product failed");
        }
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
                src={image ? image : "/dioshop.png"}
                className="rounded-circle author-box-picture"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleUploadImage}
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
                        value={nameProduct}
                        onChange={(e) => setNameProduct(e.target.value)}
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
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success">
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