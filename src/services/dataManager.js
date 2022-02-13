import datas from '../datas/housing.json'

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
