import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src="../img/logo.png" alt="logo" />
      <nav>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'nav-active' : null)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) => (nav.isActive ? 'nav-active' : null)}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
