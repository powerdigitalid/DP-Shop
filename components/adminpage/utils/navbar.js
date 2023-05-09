import React, {Component} from 'react'

  const change = (e) => {
    e.preventDefault()
    if (document.body.classList.contains("sidebar-mini") && screen.width > 1024){
      document.body.classList.remove("sidebar-mini")
    } else if (!document.body.classList.contains("sidebar-mini") && screen.width > 1024) {
      document.body.classList.add("sidebar-mini")
    } else if (document.body.classList.contains("sidebar-gone") && screen.width <= 1024) {
      document.body.classList.add("sidebar-show")
      document.body.classList.remove("sidebar-gone")
    } else if (document.body.classList.contains("sidebar-show") && screen.width <= 1024) {
      document.body.classList.remove("sidebar-show")
      document.body.classList.add("sidebar-gone")
    }
  }


export default function Navbar() {
  return (
    <div>
      <div className="navbar navbar-bg sticky-top" style={{backgroundColor:"#3366ff"}}></div>
      <nav className="navbar main-navbar ">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a data-toggle="sidebar" onClick={change}  className="nav-link nav-link-lg">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
        </form> 
      </nav>
    </div>
  )
}
