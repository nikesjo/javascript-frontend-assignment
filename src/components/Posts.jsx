import React from 'react'

const Posts = ({title, date}) => {
  return (
    <div className="post">
        <h4>{title}</h4>
        <span>{date}</span>
    </div>
  )
}

export default Posts