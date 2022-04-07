import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

// Components
import SignOptions from './small/SignOptions'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user_info'))

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
            {user ? (
              <li onClick={toggleNavbar}>
                <Link to="/profile">Profile</Link> {/* Only after logged in */}
              </li>
            ) : (
              ''
            )}
          </ul>

          {!user ? <SignOptions onClick={toggleNavbar} /> : ' '}
        </div>
      </div>
    )
  }
}

export default Navbar
