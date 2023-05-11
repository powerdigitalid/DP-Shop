import { Html, Head, Main, NextScript } from 'next/document'
import LandingPageScripts from '../components/landingpage/utils/scripts'
import AdminScript from '../components/adminpage/utils/scripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <LandingPageScripts />
        <AdminScript/>
      </body>
    </Html>
  )
}
