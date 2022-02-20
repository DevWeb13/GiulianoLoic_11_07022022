import React from 'react'
/**
 * Stars component
 *
 * @prop   {string}  housingDatasRating  number of stars
 *
 * @return  {React.ReactElement}      Stars component
 */
function Stars({ housingDatasRating }) {
  const starsGrey = []
  for (let i = 0; i < 5; i++) {
    starsGrey.push(i)
  }

  const starsRed = []
  for (let i = 0; i < housingDatasRating; i++) {
    starsRed.push(i)
  }

  return (
    <div className="stars">
      <ul className="starsGreyContainer">
        {starsGrey.map((_starGrey, index) => (
          <li key={index} className="starGrey">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                fill="#E3E3E3"
              />
            </svg>
          </li>
        ))}
      </ul>
      <ul className="starsRedContainer">
        {starsRed.map((_starRed, index) => (
          <li key={index} className="starRed">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                fill="#FF6060"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Stars
