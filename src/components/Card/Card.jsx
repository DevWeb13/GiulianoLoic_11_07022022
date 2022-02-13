import { NavLink } from 'react-router-dom'

function Card({ housing }) {
  return (
    <NavLink to={`/fiche-logement/${housing.id}`}>
      <article className="card">
        <img src={housing.cover} alt={housing.title} height={255} width={335} />
        <h2>{housing.title}</h2>
      </article>
    </NavLink>
  )
}

export default Card
