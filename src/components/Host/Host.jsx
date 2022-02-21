import React from 'react'

/**
 * Host component
 *
 * @prop   {object}  housingHost  [object containing the name and photo of the owner of the property]
 *
 * @return  {React.ReactElement}      Host component
 */
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
