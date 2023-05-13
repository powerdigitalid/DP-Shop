import Head from 'next/head'
import React from 'react'
import EditProduct from '../../../components/adminpage/formproduk/editproduk'
import Layout from '../../../components/adminpage/utils/layout'
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../../libs/cookie.lib'

export default function Editproduk() {
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
        <EditProduct />
        </Layout>
    </div>
  )
}
