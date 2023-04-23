export default function Formlogin() {
  return (
    <section className="section">
      <div className="container mt-5">
        {/* <div className={`alert alert-${error.includes("successfully")?'success':'danger'} alert-dismissible fade ${error == '' ? '': 'show'}`} role="alert">
          {error}
        </div> */}
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand">
              {/* <img
                src="dist/img/logo/logos.png"
                alt="logo"
                width={200}
                className="shadow-light"
              /> */}
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h4>Login Administrator</h4>
              </div>
              <div className="card-body">
                <div
                  className="needs-validation"
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      tabIndex={1}
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">
                      Please fill in your username
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      tabIndex={2}
                      required
                    />
                    <div className="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      tabIndex={4}
                      href="#"
                    >
                      {/* {loading ? "Loading..." : "Login"} */}
                        <h5 className="" style={{color:"white"}}>Login</h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="simple-footer">Copyright © Power Digital Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
}