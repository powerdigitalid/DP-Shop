
export default function Editproduct() {
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