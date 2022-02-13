import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getHousing } from '../../services/dataManager'
import Gallery from '../../components/Gallery/Gallery'

function HousingSheet() {
  const { housingId } = useParams()

  const [housingPictures, setHousingPictures] = useState({})

  useEffect(() => {
    setHousingPictures(getHousing(housingId).pictures)
  }, [housingId])

  return (
    <div className="housing-sheet">
      <Gallery housingPictures={housingPictures} />
      <h1>Fiche Logement 🧮</h1>
      <h2>Logement numero : {housingId}</h2>
    </div>
  )
}

export default HousingSheet
