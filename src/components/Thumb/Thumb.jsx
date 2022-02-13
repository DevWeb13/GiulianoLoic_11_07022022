import React, { useState, useEffect } from 'react'
import { getAllHousing } from '../../services/dataManager'
import Card from '../Card/Card'

function Thumb() {
  const [allHousingData, setAllHousingData] = useState([])

  useEffect(() => {
    setAllHousingData(getAllHousing())
  }, [])

  return (
    <section className="thumb">
      {allHousingData.map((housing) => (
        <Card key={housing.id} housing={housing} />
      ))}
    </section>
  )
}

export default Thumb
