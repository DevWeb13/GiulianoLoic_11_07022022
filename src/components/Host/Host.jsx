import React from 'react'

const Host = ({ housingHost }) => {
  return (
    <div className="host">
      <p className="name">{housingHost.name}</p>
      <div className="imgContainer">
        <img src={housingHost.picture} alt={'photo de ' + housingHost.name} />
      </div>
    </div>
  )
}

export default Host
