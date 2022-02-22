import { useParams } from 'react-router-dom'
import { getHousing } from '../../services/dataManager'
import Gallery from '../../components/Gallery/Gallery'
import TitleLocationTags from '../../components/TitleLocationTags/TitleLocationTags'
import Stars from '../../components/Stars/Stars'
import Host from '../../components/Host/Host'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../Error/Error'

function HousingSheet() {
  const { housingId } = useParams()
  const housingDatas = getHousing(housingId)
  return housingDatas.pictures === undefined ? (
    <Error />
  ) : (
    <main className="housing-sheet mainMobile mainDesktop">
      <Gallery housingPictures={housingDatas.pictures} />
      <div className="presentation">
        <TitleLocationTags
          housingTitle={housingDatas.title}
          housingLocation={housingDatas.location}
          housingTags={housingDatas.tags}
        />
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
