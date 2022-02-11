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

function getHousing(id) {}

export { getAllHousing, getHousing }
