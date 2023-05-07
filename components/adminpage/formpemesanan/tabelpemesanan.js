import Link from 'next/link'
import React from 'react'

export default function Tabelpemesanan() {
    return (
        <div>
            <div className="card author-box card-primary">
                <div className="card-body">
                    <div className="col-12 mb-3">
                        <div className="">
                            <h2>Tabel Pemesanan</h2>
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Exampel@gmail.com</td>
                                                <td>Rp. 350.000</td>
                                                <td>JNE</td>
                                                <td>
                                                    <Link href="/admin/pemesanan/detail" className="btn btn-primary mr-1 rounded text-white"><i className="far fa-eye mr-1" />Detail</Link>
                                                    <button className="btn btn-success mr-1 rounded text-white"><i className="fas fa-edit mr-1" />Confirmasi</button>
                                                    <button className="btn btn-danger rounded text-white"><i className="far fa-times-circle mr-1" />Tolak</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
