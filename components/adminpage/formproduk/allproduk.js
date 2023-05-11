import Link from "next/link";

export default function AllProducts() {

    return (
        <div className="container-fluid" id="detail">
            <div className="row  py-2 shadow-sm my-3 ">
                <div className="col-lg-3">
                    <div
                        id="product-carousel"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img
                                    className="w-100 h-100"
                                    src="/landingpage/img/product-3.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                            <h3 className="font-weight-semi-bold mb-4">Rp. 350.000</h3>
                        </div>
                        <div className="col-md-4">
                            <Link href="/admin/formprodukpages/editproduk" className="btn btn-primary rounded mr-2 text-white">Edit</Link>
                            <button className="btn btn-danger rounded">Hapus</button>
                        </div>
                    </div>
                    <p className="m4b-">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
                        diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
                        magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
                        stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum
                        diam et rebum kasd rebum.
                    </p>
                </div>

            </div>
            <div className="row  py-2 shadow-sm my-3 ">
                <div className="col-lg-3">
                    <div
                        id="product-carousel"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img
                                    className="w-100 h-100"
                                    src="/landingpage/img/product-2.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                            <h3 className="font-weight-semi-bold mb-4">Rp. 450.000</h3>
                        </div>
                        <div className="col-md-4">
                            <Link href="/admin/formprodukpages/editproduk" className="btn btn-primary rounded mr-2 text-white">Edit</Link>
                            <button className="btn btn-danger rounded">Hapus</button>
                        </div>
                    </div>
                    <p className="m4b-">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
                        diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
                        magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
                        stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum
                        diam et rebum kasd rebum.
                    </p>
                </div>

            </div>
        </div>
    );
}