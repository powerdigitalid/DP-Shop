import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
export default function Editproduct() {
  const router = useRouter();
  //update product
  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    product_desc: "",
    product_img: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);
  const { id } = router.query;

  const handleProduct = () => {
    fetch(`/api/produk/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setProduct(res.data);
        } else {
          setProduct([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product.product_name);
    formData.append("product_price", product.product_price);
    formData.append("product_desc", product.product_desc);
    formData.append("product_img", image);
    fetch(`/api/produk/update?id=${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Produk berhasil diupdate",
          });
          router.push("/adminpage/allproduk");
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Produk gagal diupdate",
          });
        }
      });
  };

  useEffect(() => {
    handleProduct();
  }, []);

    return (
      <>
        <div className="card author-box card-primary">
          <div className="card-body">
            <div className="col-12">
              <div className="">
                <h2>Edit Product</h2>
              </div>
            </div>
            <form>
              <div className="author-box-left">
                <div 
                  alt="image"
                  // src={`https://powerdigital.id/rumahatha-backend${product.product_img}`}
                  // value={image}
                  className="rounded author-box-picture"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="clearfix" />
                <div className="custom-file w-50 h-50 mb-3">
                  <input
                    type="file"
                    className="custom-file-input form-control-sm"
                    id="customFile"
                    onChange={(e) => setImage(e.target.files[0])}

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
                          value={product.product_name}
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              product_name: e.target.value,
                            })
                          }
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
                            placeholder="Harga"
                            value={product.product_price}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                product_price: e.target.value,
                              })
                            }
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
                          placeholder="Deskripsi"
                          value={product.product_desc}
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              product_desc: e.target.value,
                            })
                          }
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