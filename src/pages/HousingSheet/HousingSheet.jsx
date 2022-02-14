import { useParams } from 'react-router-dom'
import { getHousing } from '../../services/dataManager'
import Gallery from '../../components/Gallery/Gallery'
import Stars from '../../components/Stars/Stars'

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
      <Stars housingDatasRating={housingDatas.rating} />
    </div>
  )
}

export default HousingSheet
