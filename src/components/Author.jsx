import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthorBooks from '../pages/AuthorBooks';
function Author() {
  const navigate = useNavigate()
  const { authorId } = useParams();
  console.log(authorId);
  const [author, setAuthorDetails] = useState([])
  const [loading, setLoading] = useState(true)
  async function getAuthorDetails() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors/${authorId}`)
      const authorDetails = await response.json()
      setAuthorDetails(authorDetails)
      setLoading(false)
      console.log(authorDetails);
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }


 async function handleAuthorBooks(){
  navigate(`/books/${authorId}`)
 }
  



  useEffect(() => {
    getAuthorDetails()
  }, [])

  if (loading) {
    return <div className='text-3xl font-bold flex items-center justify-center'>Loading data please wait</div>
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="text-4xl font-bold p-5 text-gray-800">Author</div>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="w-48 h-48 mb-4">
          <img className="w-full h-full object-cover rounded-full shadow-md" src={author.image} alt={author.name} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{author.name}</h1>
        <p className="max-w-prose text-lg font-medium text-gray-700 mb-4">{author.bio}</p>
        <span className="text-gray-600 font-semibold">DOB - {author.birthDate}</span>
      </div>
     
      
       
     
      
    </div>
  )
}

export default Author
