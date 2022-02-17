import React from 'react'
import { useState } from 'react'

const Gallery = ({ housingPictures }) => {
  const [chooseImg, setChooseImg] = useState(0)
  let currentPicture = housingPictures[chooseImg]

  const previousImg = () => {
    console.log(chooseImg)
    if (chooseImg === 0) {
      setChooseImg(housingPictures.length - 1)
    } else {
      setChooseImg(chooseImg - 1)
    }
    currentPicture = housingPictures[chooseImg]
  }

  const nextImg = () => {
    if (chooseImg === housingPictures.length - 1) {
      setChooseImg(0)
    } else {
      setChooseImg(chooseImg + 1)
    }
    currentPicture = housingPictures[chooseImg]
  }
  console.log(housingPictures.length)
  return (
    <div className="card gallery">
      {housingPictures.length !== 1 && (
        <button
          className="arrow"
          id="leftArrow"
          type="button"
          onClick={previousImg}
          name="previous"
        ></button>
      )}

      <img src={currentPicture} alt="" />
      {housingPictures.length !== 1 && (
        <button
          className="arrow"
          id="rightArrow"
          type="button"
          onClick={nextImg}
          name="next"
        ></button>
      )}
      <p>
        {chooseImg + 1}/{housingPictures.length}
      </p>
    </div>
  )
}

export default Gallery
