import datas from '../datas/housing.json'

/**
 * recover id, title, cover of each property
 *
 * @return  {array}  id, title, cover of each property
 */
function getAllHousing() {
  const AllHousing = []
  datas.forEach((house) => {
    AllHousing.push({
      id: house.id,
      title: house.title,
      cover: house.cover,
    })
  })
  return AllHousing
}

/**
 * recover property data
 *
 * @param   {string}  id  [property identifier]
 *
 * @return  {object}      property data
 */
function getHousing(id) {
  let housingData = {}
  datas.forEach((house) => {
    if (house.id === id) {
      housingData = house
    }
  })
  return housingData
}

export { getAllHousing, getHousing }
