import React from 'react'
import { Link } from 'react-router-dom'

function AuthorCard(props) {
  
  const author = props.author
  return (
    <div className="max-w-sm mx-auto my-4">
      <article className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Link to={`/authors/${author._id}`}>
          <img className="w-64 h-64 object-cover" src={author.image} alt={author.name} />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{author.name}</h3>
            <p className="text-gray-600">Click to view more details</p>
          </div>
        </Link>
      </article>
    </div>
  )
}

export default AuthorCard