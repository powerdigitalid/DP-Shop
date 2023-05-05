import React from 'react'
import AllProducts from '../../../components/adminpage/formproduk/allproduk'
import FormInputProduct from '../../../components/adminpage/formproduk/forminputproduk'
import Layout from '../../../components/adminpage/utils/layout'

export default function Index() {
  return (
    <div>
        <Layout>
          <FormInputProduct />
            <AllProducts />
        </Layout>
    </div>
  )
}
