import React from 'react'
import { useState, useEffect } from 'react'
import Swl from 'sweetalert2'

export default function Tabeluser() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleUser = () => {
    fetch('/api/user/all', {
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
    handleUser();
  }, []);

  const handleDeleteData = (id) => {
    fetch(`/api/user/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          handleUser();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                                        <th scope="col">Username</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.length > 0 ? data.map((users, index) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                        <th scope="row"> {index +1} </th>
                                        <td>{users.username}</td>
                                        <td>{users.password}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger rounded"><i className="far fa-trash-alt mx-2" onClick={handleDeleteData} />Hapus</button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">No Data</td>
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
    )
}
