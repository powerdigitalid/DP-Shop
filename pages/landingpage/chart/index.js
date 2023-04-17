import Head from 'next/head'
import Layout from '../../../components/landingpage/utils/layout'
import Chart from '../../../components/landingpage/chart/chart'

export default function Detail() {
  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <Layout>
        <Chart/>
      </Layout>
    </>
  )
}
