import { NavLink } from 'react-router-dom'

/**
 *
 * @param {object} housing Objet contenant l'id, le titre et le lien de l'image de l'appartement
 * @returns
 */
function Card({ housing }) {
  return (
    <NavLink to={`/fiche-logement/${housing.id}`}>
      <article className="card">
        <img src={housing.cover} alt={housing.title} />
        <h2>{housing.title}</h2>
      </article>
    </NavLink>
  )
}

export default Card
