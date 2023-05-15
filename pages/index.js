import Head from 'next/head'
import Layout from '../components/landingpage/utils/layout'
import Featured from '../components/landingpage/utils/featured'
import Offer from '../components/landingpage/utils/offer'
import TrendProduct from '../components/landingpage/product/trendproduct'
import {useSession, signIn, signOut} from "next-auth/react"

export default function Home() {
  const {data: session, status} = useSession()
  
  if (session){
    return (
      <div>
        <Head>
          <title>Welcome {session.user.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Featured />
          <Offer />
          <TrendProduct />
        </Layout>
      </div>
    )
  } else {
    return (
      <div>
        <Head>
          <title>Home Not Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Featured />
          <Offer />
          <TrendProduct />
        </Layout>
      </div>
    )
  }
}
