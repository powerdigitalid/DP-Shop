import React from 'react'
import Head from "next/head";
import Layout from "../../../components/landingpage/utils/layout";
import Pay from '../../../components/landingpage/pay/pay';

export default function index() {
  return (
    <>
        <Head>
            <title>Pay</title>
        </Head>
        <Layout>
            <Pay />
        </Layout>
    </>
  )
}
