import { Link } from 'react-router-dom'
import { getAllHousing } from '../../services/dataManager'

function Thumb() {
  return (
    <nav>
      <Link to="/fiche-logement/1">Fiche</Link>
    </nav>
  )
}

export default Thumb
