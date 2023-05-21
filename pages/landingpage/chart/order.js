import Head from "next/head";
import Layout from "../../../components/landingpage/utils/layout";
import ChartComponent from "../../../components/landingpage/chart/chart";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/router'
import Swal from "sweetalert2";

export default function Index() {
  const { data: session, status } = useSession();
  const router = useRouter()

  // if (session) {
    return (
      <>
        <Head>
          <title>Order by</title>
        </Head>
        <Layout>
          <ChartComponent />
        </Layout>
      </>
    );
  // } else {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "You must login first!",
  //   });
  //   signIn();
  // }
}
