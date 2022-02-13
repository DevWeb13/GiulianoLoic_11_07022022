import datas from '../datas/housing.json'

function getAllHousing() {
  const answer = []
  datas.forEach((house) => {
    answer.push({
      id: house.id,
      title: house.title,
      cover: house.cover,
    })
  })
  return answer
}

function getHousing(id) {
  const housingData = []
  datas.forEach((house) => {
    if (house.id === id) {
      housingData.push(house)
    }
  })
  return housingData
}

export { getAllHousing, getHousing }
