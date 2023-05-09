import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="navbar navbar-bg sticky-top" style={{backgroundColor:"#3366ff"}}></div>
      <nav className="navbar main-navbar ">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a data-toggle="sidebar"  className="nav-link nav-link-lg">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
        </form> 
      </nav>
    </div>
  )
}
