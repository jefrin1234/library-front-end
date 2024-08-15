import React from 'react'
import { useParams } from 'react-router-dom';
function AuthorBooks() {
  const {authorId} = useParams()
  console.log(authorId);
  return (
    <div>
      author bokd
    </div>
  )
}


export default AuthorBooks
