import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Tabelpemesanan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleOrder = () => {
    fetch("/api/order/all?status=Belum Bayar", {
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

  const handleConfirm = (e, id) => {
    e.preventDefault();
    fetch(`/api/order/confirm`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Order berhasil dikonfirmasi",
            showConfirmButton: false,
            showCancelButton: true,
            timer: 1500,
          });
          handleOrder();
        } else {
          Swal.fire({
            icon: "error",
            title: "Order gagal dikonfirmasi",
            showConfirmButton: true,
            showDenyButton: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Order gagal dikonfirmasi",
          showConfirmButton: true,
          showDenyButton: true,
        });
      });
  };

  
  const handleTolak = (e,id)=>{
    e.preventDefault();
    fetch(`/api/order/tolak`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.data) {
                Swal.fire({
                    icon: "success",
                    title: "Order berhasil ditolak",
                    showConfirmButton: true,
                    showCancelButton: true,
                    timer: 1500,
                });
                handleOrder();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Order gagal ditolak",
                    showConfirmButton: true,
                    showDenyButton: true,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Order gagal ditolak",
                showConfirmButton: true,
                showDenyButton: true,
            });
        });
    }


  useEffect(() => {
    handleOrder();
  }, []);

  return (
    <div>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12 mb-3">
            <div className="">
              <h2>Pemesanan</h2>
            </div>
          </div>
          <div class="container">
            <div>
              <div className="row">
                <div className="col-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Total</th>
                        <th scope="col">Ekspedisi</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((order, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{order.user_google}</td>
                            <td>{order.total}</td>
                            <td>{order.expedisi}</td>
                            <td>
                              <Link
                                href={`/admin/pemesanan/detail?id=${order.id}`}
                                className="btn btn-primary mr-1 rounded text-white"
                              >
                                <i className="far fa-eye mr-1" />
                                Detail
                              </Link>
                              <button
                                className="btn btn-success mr-1 rounded text-white"
                                onClick={(e) => handleConfirm(e, order.id)}
                              >
                                <i className="fas fa-edit mr-1" />
                                Confirmasi
                              </button>
                              <button className="btn btn-danger rounded text-white" onClick={(e)=>handleTolak(e, order.id)}>
                                <i className="far fa-times-circle mr-1" />
                                Tolak
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            Data Kosong
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
