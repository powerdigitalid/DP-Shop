import Link from "next/link";

export default function AllProducts() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-5">
                            <h2>All Product</h2>
                        </div>
                    </div>
                </div>

                <div className="text-center container py-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card shadow">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <img src="https://brtnetwork.id/wp-content/uploads/2022/09/jadi-beautypreneur-skincare-lokal-1024x576.webp" className="w-100" />
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100 my-1">
                                                <Link className="btn btn-info rounded ml-1 mr-2" style={{ color: "black" }} href={"#"}>Edit</Link>
                                                <Link className="btn btn-danger rounded" style={{ color: "black" }} href={"#"}>Hapus</Link>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <a href className="text-reset">
                                        <h5 className="card-title mb-3">Make Up Terkini</h5>
                                    </a>
                                    <a href className="text-reset">
                                        <p>Membersihkan kulit dari debu dan kotoran yang mengganggu di kulit</p>
                                    </a>
                                    <h6 className="mb-3">Rp. 125.000</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card shadow">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <img src="https://brtnetwork.id/wp-content/uploads/2022/09/jadi-beautypreneur-skincare-lokal-1024x576.webp" className="w-100" />
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100 my-1">
                                                <Link className="btn btn-info rounded ml-1 mr-2" style={{ color: "black" }} href={"#"}>Edit</Link>
                                                <Link className="btn btn-danger rounded" style={{ color: "black" }} href={"#"}>Hapus</Link>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <a href className="text-reset">
                                        <h5 className="card-title mb-3">Make Up Terkini</h5>
                                    </a>
                                    <a href className="text-reset">
                                        <p>Membersihkan kulit dari debu dan kotoran yang mengganggu di kulit</p>
                                    </a>
                                    <h6 className="mb-3">Rp. 125.000</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card shadow">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <img src="https://brtnetwork.id/wp-content/uploads/2022/09/jadi-beautypreneur-skincare-lokal-1024x576.webp" className="w-100" />
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100 my-1">
                                                <Link className="btn btn-info rounded ml-1 mr-2" style={{ color: "black" }} href={"#"}>Edit</Link>
                                                <Link className="btn btn-danger rounded" style={{ color: "black" }} href={"#"}>Hapus</Link>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <a href className="text-reset">
                                        <h5 className="card-title mb-3">Make Up Terkini</h5>
                                    </a>
                                    <a href className="text-reset">
                                        <p>Membersihkan kulit dari debu dan kotoran yang mengganggu di kulit</p>
                                    </a>
                                    <h6 className="mb-3">Rp. 125.000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}