import Head from 'next/head'
import React from 'react'
import AllProducts from '../../../components/adminpage/formproduk/allproduk'
import FormInputProduct from '../../../components/adminpage/formproduk/forminputproduk'
import Layout from '../../../components/adminpage/utils/layout'
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../../libs/cookie.lib'

export default function Index() {
  useEffect(() => {
    if(getCookie('token') === "" && getCookie("username") === ""){
      window.location.href = "/login";
    }else{
      validateToken(getCookie('token')) ? null : window.location.href = "/login";
    }
  }, [])
  return (
    <div>
        <Layout>
          <FormInputProduct />
            <AllProducts />
        </Layout>
    </div>
  )
}
