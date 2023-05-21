import React from "react";
import Link from "next/link";
import {useState, useEffect} from "react";
import { useSession, signIn } from "next-auth/react";
import {useRouter} from "next/router";
//how to handle add cart button to add product to cart by idproduct and iduser session

export default function TrendProduct() {
  const { data: session, status } = useSession();
  const [cart, setCart] = useState({});
  // const [order, setOrder] = useState([]);
  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const router = useRouter()

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
 
    //add handle button add to cart produk and user session
    const handleAddToCart = (id,product_price,product_name) => {
      if (session) {
        //how to fetch data product_id and product_price product
        fetch("/api/order/cart", {
          method: "POST",
          body: JSON.stringify({
            user_google: session.user.email,
            product_id: id,
            product_name: product_name,
            product_price: product_price,
            quantity: 1,
            total: product_price ,
        }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data) {
              setCart(res.data);
              router.push("/");
            } else {
              setCart({});
            }
          })
          .catch((err) => {
            console.log(err);
            setCart({});
          });
      } else {
        signIn("google");
      }
  };



    useEffect(() => {
        handleProduct();
    }, []);


  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {/* card produk */}
        {data.length > 0 ? data.map((prod, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4" key={index}>
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={prod.product_img} alt />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{prod.product_name}</h6>
              <div className="d-flex justify-content-center">
                <h6>{prod.product_desc}</h6>
                <h6 className="text-muted ml-2">
                  <del>Rp.{prod.product_price}</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link href="/landingpage/detail#detail" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1" />
                View Detail
              </Link>
              <a href className="btn btn-sm text-dark p-0" onClick={() => handleAddToCart(prod.id, prod.product_price, prod.product_name)}>
                <i className="fas fa-shopping-cart text-primary mr-1"/> 
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        )) : <h3 className="text-center">Belum ada produk</h3>}

      </div>
    </div>
  );
}
