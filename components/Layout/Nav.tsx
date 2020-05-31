import { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { FaUser, FaBars } from 'react-icons/fa'
import { ReactChild } from 'react'

type NavLinkProps = {
  pathname: string,
  href: string,
  children: ReactChild
}
const NavLink = ({ pathname, href, children }: NavLinkProps) =>
  <li className={`nav-item ${pathname === href ? 'active' : ''}`}>
    <Link href={href} replace={true}>
      <a className="nav-link">
      {
        children
      }
      </a>
    </Link>
  </li>

export default withRouter(({ router: { pathname } }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () =>
    setCollapsed(!collapsed)

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/static/logo.png" alt="logo" />
          </a>
        </Link>
        <button className="navbar-toggler float-right" aria-label="Rozwiń menu" onClick={toggle}>
          <FaBars />
        </button>
        <div className={`navbar-collapse collapse ${collapsed ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <NavLink href="/" pathname={pathname}>
              Poszczególne światy
            </NavLink>
            <NavLink href="/top" pathname={pathname}>
              Topka światów
            </NavLink>
            <NavLink href="/player" pathname={pathname}>
              Sprawdź gracza
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
})