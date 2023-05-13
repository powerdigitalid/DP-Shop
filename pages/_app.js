import "../public/landingpage/css/style.css"
import "../public/landingpage/css/fontawesome/all.css"
import "../public/landingpage/lib/owlcarousel/assets/owl.carousel.css"
import "../public/adminpage/style.admin.css"

import {SessionProvider} from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
