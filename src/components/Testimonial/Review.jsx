import React from 'react'

const Review = ({clientReview, image, name, description}) => {
  return (
    <div className="review">
        <div className="stars">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <div className="client-review">
            <p>{clientReview}</p>
        </div>
        <div className="client">
            <img src={image} alt="" />
            <div className="client-name">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Review