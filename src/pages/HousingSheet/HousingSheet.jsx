import { useParams } from 'react-router-dom'
import { getHousing } from '../../services/dataManager'
import Gallery from '../../components/Gallery/Gallery'

function HousingSheet() {
  const { housingId } = useParams()

  const housingDatas = getHousing(housingId)

  return (
    <div className="housing-sheet">
      <Gallery housingPictures={housingDatas.pictures} />
      <h1>{housingDatas.title}</h1>
      <h2>{housingDatas.location}</h2>
      <div className="tagsContainer">
        {housingDatas.tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </div>
    </div>
  )
}

export default HousingSheet
