import { useParams } from 'react-router-dom'
import { getHousing } from '../../services/dataManager'
import Gallery from '../../components/Gallery/Gallery'
import Stars from '../../components/Stars/Stars'
import Host from '../../components/Host/Host'
import Collapse from '../../components/Collapse/Collapse'

function HousingSheet() {
  const { housingId } = useParams()

  const housingDatas = getHousing(housingId)

  return (
    <main className="housing-sheet mainMobile mainDesktop">
      <Gallery housingPictures={housingDatas.pictures} />
      <div className="presentation">
        <div className="titleLocationTagsContainer">
          <h1>{housingDatas.title}</h1>
          <h2>{housingDatas.location}</h2>
          <div className="tagsContainer">
            {housingDatas.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <section className="starsAndHostContainer">
          <Stars housingDatasRating={housingDatas.rating} />
          <Host housingHost={housingDatas.host} />
        </section>
      </div>

      <section className="collapsesContainer">
        <Collapse title="Description" content={housingDatas.description} />
        <Collapse title="Équipements" content={housingDatas.equipments} />
      </section>
    </main>
  )
}

export default HousingSheet
