import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

import SignOptions from './small/SignOptions'

function Navbar() {
  const [navbarState, setNavbarState] = useState(false)

  const toggleNavbar = () => setNavbarState((prev) => !prev)

  if (!navbarState) {
    return (
      <div className="navbar-closed">
        <Link to="/">blog</Link>

        <span className="material-icons-outlined" onClick={toggleNavbar}>
          menu
        </span>
      </div>
    )
  } else {
    return (
      <div className="navbar-opened">
        <div className="navbar-opened-inside">
          <div className="navbar-top">
            <Link to="/" onClick={toggleNavbar}>
              blog
            </Link>

            <span className="material-icons-outlined" onClick={toggleNavbar}>
              close
            </span>
          </div>

          <ul className="navigation-container">
            <li onClick={toggleNavbar}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNavbar}>
              <Link to="/tags">Tags</Link>
            </li>
          </ul>

          <SignOptions onClick={toggleNavbar} />
        </div>
      </div>
    )
  }
}

export default Navbar
