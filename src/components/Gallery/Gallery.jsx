import React from 'react'

const Gallery = ({ housingPictures }) => {
  return (
    <div className="card">
      <img src={housingPictures[0]} alt="" />
    </div>
  )
}

export default Gallery
