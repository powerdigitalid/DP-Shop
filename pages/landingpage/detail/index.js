import Head from 'next/head'
import Layout from '../../../components/landingpage/utils/layout'
import DetailComponent from '../../../components/landingpage/detail/detail'

export default function Detail() {
  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <Layout>
        <DetailComponent/>
      </Layout>
    </>
  )
}
