import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function Sidebar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const handleCheckActiveMenu = () => {
    let pathname = router.pathname;
    const path = pathname.split("/").length > 2 ? pathname.split("/")[2] : pathname.split("/")[1]; 
    switch (path) {
      case "admin":
        setActiveMenu("admin");
        break;
      case "editbannerpages":
        setActiveMenu("editbannerpages");
        break;
      case "formprodukpages":
        setActiveMenu("formprodukpages");
        break;
      case "formtreatmentpages":
        setActiveMenu("formtreatmentpages");
        break;
      case "formcustomerpages":
        setActiveMenu("formcustomerpages");
        break;
      case "reservationpages":
        setActiveMenu("reservationpages");
        break;
      case "transaksipages":
        setActiveMenu("transaksipages");
        break;
      case "settingpages":
        setActiveMenu("settingpages");
        break;
      default:
        setActiveMenu("admin");
        break;
    }
  };

  const handleLogout =()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout from this session?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
      }
    })
  }
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link href="/admin">
            <Image
            //   src="/dist/img/logo/logos.png"
              alt="logo"
              width={150}
              height={50}
              className="shadow-light"
            />
          </Link>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <Link href="/admin">RA</Link>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Admin Menu</li>
          <li className={activeMenu == "admin" ? "active" : ""}>
            <Link className="nav-link" href="/admin">
              <i className="fas fa-fire" /> <span>Dashboard</span>
            </Link>
          </li>
          <li className={activeMenu == "formprodukpages" ? "active" : ""}>
            <Link className="nav-link" href="/admin/formprodukpages">
              <i className="fas fa-store" /> <span>Input Products</span>
            </Link>
          </li>
          <li className={activeMenu == "formcustomerpages" ? "active" : ""}>
            <Link className="nav-link" href="/admin/user">
              <i className="fas fa-users" /> <span>User</span>
            </Link>
          </li>
          <li className={activeMenu == "formcustomerpages" ? "active" : ""}>
            <Link className="nav-link" href="/admin/pemesanan">
              <i className="fas fa-truck"/> <span>Pemesanan</span>
            </Link>
          </li>
          <li className={activeMenu == "transaksipages" ? "active" : ""}>
            <Link className="nav-link" href="/admin/history">
              <i className="fas fa-book-open" /> <span>History Transaksi</span>
            </Link>
          </li>
        </ul>
        <div className="mt-4 mb-4 p-3">
          <button
            className="btn btn-success border-0 btn-lg btn-block btn-icon-split"
            style={{height: "40px", backgroundColor:"#00cc00", color:"white"}}
            onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt"/><span className="hide-sidebar-mini"  >Close</span>
          </button>
        </div>
      </aside>
    </div>
  );
}