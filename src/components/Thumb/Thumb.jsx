import React, { useState, useEffect } from 'react'
import { getAllHousing } from '../../services/dataManager'
import Card from '../Card/Card'

function Thumb() {
  const [housingData, setHousingData] = useState([])

  useEffect(() => {
    setHousingData(getAllHousing())
  }, [])

  return (
    <section className="thumb">
      {housingData.map((housing) => (
        <Card key={housing.id} housing={housing} />
      ))}
    </section>
  )
}

export default Thumb
