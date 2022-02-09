import { NavLink } from 'react-router-dom'

function Header() {
 
  return (
    <header>
      <div className="logo">
        <img src="./img/logo.png" alt="logo" />
      </div>
      <nav>
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" activeClassName="nav-active">
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
