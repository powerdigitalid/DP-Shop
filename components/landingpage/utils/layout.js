import Footer from "./footer";
import Topbar from "./topbar";
import Navbar from "./navbar";

export default function Layout({children}) {
  return (
    <div className="body-inner">
			<Topbar/>
			<Navbar/>
        {children}
			<Footer/>
    </div>
  )
}