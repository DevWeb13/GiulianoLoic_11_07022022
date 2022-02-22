import React from 'react'

const TitleLocationTags = ({ housingTitle, housingLocation, housingTags }) => {
  return (
    <div className="titleLocationTagsContainer">
      <h1>{housingTitle}</h1>
      <h2>{housingLocation}</h2>
      <div className="tagsContainer">
        {housingTags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleLocationTags
