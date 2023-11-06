import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div className="section-title">
      <div className="red-title">{title}</div>
      <h2>{description}</h2>
    </div>
  )
}

export default SectionTitle