import { useLocation } from 'react-router-dom'

const Banner = () => {
  const sampleLocation = useLocation()
  const aboutManager = () => {
    if (sampleLocation.pathname !== '/a-propos') {
      return false
    } else {
      return true
    }
  }

  return (
    <section
      className={aboutManager() ? 'banner bannerAbout' : 'banner bannerHome'}
    >
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner
