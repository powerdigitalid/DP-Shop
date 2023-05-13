import React from 'react'
// import Formlogin from '../components/halamanlogin/formlogin'
// import Formlogin from '../components/adminpage/login'
import {useSession, signIn} from "next-auth/react"
import Home from '../index'
import { useRouter } from 'next/router'

export default function Login() {
  const {data: session, status} = useSession()
  const router = useRouter()
  if (session){
    router.push('/')
  } else {
    return ( 
      <div>
        <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center shadow">
                <h3 className="mb-5">Login</h3>
                {/* <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div> */}
                {/* <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div> */}
                {/* Checkbox */}
                {/* <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button> */}
                <hr className="my-4" />
                <button  className="btn btn-lg btn-block btn-primary border-0" onClick={() => signIn()} style={{ backgroundColor: '#dd4b39' }} type="submit"><i className="fab fa-google me-2" /> Sign in with google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
      
    )
  }
}
