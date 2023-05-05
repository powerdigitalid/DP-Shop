import Head from 'next/head'
import React from 'react'
import EditProduct from '../../../components/adminpage/formproduk/editproduk'
import Layout from '../../../components/adminpage/utils/layout'

export default function Editproduk() {
  return (
    <div>
        <Layout>
        <EditProduct />
        </Layout>
    </div>
  )
}
