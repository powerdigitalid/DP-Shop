import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
export default function Editproduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product_img, setImage] = useState(null);
  const [product_name, setName] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_desc, setDesc] = useState("");
  const router = useRouter();
  const { id } = router.query;

  
  const handleEdit = async () => {
    try {
      const res = await fetch("/api/produk/" + id);
      const json = await res.json();
      setData(json.data);
      setName(json.data.product_name);
      setPrice(json.data.product_price);
      setDesc(json.data.product_desc);
      setImage(json.data.product_img);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) handleEdit();
  }, [id]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_name", product_name);
    data.append("product_price", product_price);
    data.append("product_desc", product_desc);
    data.append("product_img", product_img);
    try {
      const res = await fetch(`/api/produk/update?id=${id}`, {
        method: "PUT",
        body: data,
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Produk berhasil diupdate",
      });
      router.push("/admin/formprodukpages");
      console.log(json);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Produk gagal diupdate",
      });
    }
  };

  

  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Edit Product</h2>
            </div>
          </div>
          <form onSubmit={handleUpdateProduct}>
            <div className="author-box-left">
              <div
                alt="image"
                src={product_img}
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
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm">
                            Rp
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          placeholder="Harga"
                          value={product_price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="form-control form-control-sm">
                            .00
                          </span>
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
                        value={product_desc}
                        onChange={(e) => setDesc(e.target.value)}
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
