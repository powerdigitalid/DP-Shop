import Head from 'next/head'
import Layout from '../../../components/landingpage/utils/layout'
import AllProduct from '../../../components/landingpage/product/product'

export default function Index() {
  return (
    <>
      <Head>
        <title>All Product</title>
      </Head>
      <Layout>
        <AllProduct/>
      </Layout>
    </>
  )
}
