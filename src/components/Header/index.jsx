import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="headerNav">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À Propos</Link>
    </nav>
  )
}

export default Header
