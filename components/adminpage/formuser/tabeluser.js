import React from 'react'

export default function Tabeluser() {
    return (
        <div>
            <div className="card author-box card-primary">
            <div className="card-body">
                <div className="col-12 mb-3">
                    <div className="">
                        <h2>Tabel User</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" className='col-1'>No.</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Example@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-danger rounded"><i className="far fa-trash-alt mx-2" />Hapus</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Example@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-danger rounded"><i className="far fa-trash-alt mx-2" />Hapus</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Example@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-danger rounded"><i className="far fa-trash-alt mx-2" />Hapus</button>
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
    )
}
