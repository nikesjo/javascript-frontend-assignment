import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({title, date}) => {
  return (
    <Link to='/posts' className="post">
        <h4>{title}</h4>
        <span>{date}</span>
    </Link>
  )
}

export default Posts