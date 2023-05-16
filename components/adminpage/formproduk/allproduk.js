/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

export default function AllProducts() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const router = useRouter();

    const handleProduct = () => {
        fetch('/api/produk/all', {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.data) {
                    setData(res.data);
                } else {
                    setData([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setError(err);
            });
    };

    

    useEffect(() => {
        handleProduct();
    }, []);


    return (
        <div className="container-fluid" id="detail">
            {data.length > 0 ? data.map((prod, index) => (
                <div className="row  py-2 shadow-sm my-3 " key={index}>
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
                                    src={prod.product_img}
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="font-weight-semi-bold">{prod.product_name}</h3>
                            <h3 className="font-weight-semi-bold mb-4">{prod.product_desc}</h3>
                        </div>
                        <div className="col-md-4">
                            <Link href="/admin/formprodukpages/editproduk" className="btn btn-primary rounded mr-2 text-white">Edit</Link>
                            <button className="btn btn-danger rounded">Hapus</button>
                        </div>
                    </div>
                    <p className="m4b-">
                        {prod.product_desc}
                    </p>
                </div>

            </div>
            )) : <h3 className="text-center">Belum ada produk</h3>}
        </div>
    );
}