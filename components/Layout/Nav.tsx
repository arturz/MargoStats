import Link from 'next/link'
import { withRouter } from 'next/router'
import { FaUser } from 'react-icons/fa'
import { ReactChild } from 'react'

type NavLinkProps = {
  pathname: string,
  href: string,
  children: ReactChild
}
const NavLink = ({ pathname, href, children }: NavLinkProps) =>
  <li className={`nav-item ${pathname === href ? 'active' : ''}`}>
    <Link href={href}>
      <a className="nav-link">
      {
        children
      }
      </a>
    </Link>
  </li>

export default withRouter(({ router: { pathname } }) =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
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
        <div>
          <FaUser />
        </div>
      </div>
    </div>
  </nav>
)