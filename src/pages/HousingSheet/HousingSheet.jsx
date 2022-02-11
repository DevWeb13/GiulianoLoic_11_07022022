import { useParams } from 'react-router-dom'

function HousingSheet() {
  const { housingId } = useParams()
  console.log(housingId)
  return (
    <div>
      <h1>Fiche Logement 🧮</h1>
      <h2>Logement numero : {housingId}</h2>
    </div>
  )
}

export default HousingSheet
