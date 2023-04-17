import React from "react";

export default function Detail() {
  return (
    <div className="container-fluid py-5" id="detail">
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
          <div
            id="product-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner border">
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="/landingpage/img/product-1.jpg"
                  alt="Image"
                />
              </div>
              <div className="carousel-item active">
                <img
                  className="w-100 h-100"
                  src="/landingpage/img/product-2.jpg"
                  alt="Image"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="/landingpage/img/product-3.jpg"
                  alt="Image"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="/landingpage/img/product-4.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark" />
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
          <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
          <p className="mb-4">
            Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
            diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
            magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
            stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum
            diam et rebum kasd rebum.
          </p>
          <div className="d-flex align-items-center mb-4 pt-2">
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
            <button className="btn btn-primary px-3">
              <i className="fa fa-shopping-cart mr-1" /> Add To Cart
            </button>
          </div>
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
      <div className="row px-xl-5">
        <div className="col">
          <div className="nav nav-tabs justify-content-center border-secondary mb-4">
            <a
              className="nav-item nav-link active"
              data-toggle="tab"
              href="#tab-pane-1"
            >
              Description
            </a>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <h4 className="mb-3">Product Description</h4>
              <p>
                Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut
                diam consetetur duo justo est, sit sanctus diam tempor aliquyam
                eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at
                sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                sanctus eirmod takimata dolor ea invidunt.
              </p>
              <p>
                Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                tempor. Gubergren amet amet labore sadipscing clita clita diam
                clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                Magna takimata justo et amet magna et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
