import React from 'react'

const Pictures = ({image, name, description}) => {
  return (
    <div className="pictures">
        <img src={image} />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Pictures