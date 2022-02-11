import { Link } from 'react-router-dom'
import datas from '../../datas/housing.json'
function Thumb() {
  console.log(datas)
  return (
    <nav>
      <Link to="/fiche-logement/1">Fiche</Link>
    </nav>
  )
}

export default Thumb
