import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function BookDetails() {

  const { bookId } = useParams()
  const [book, setBook] = useState()
  const [loading, setLoading] = useState(true)
  async function getBookDetails() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${bookId}`)
    const bookDetails = await response.json()
    setLoading(false)
    setBook(bookDetails)
    console.log(bookDetails);
  }



  useEffect(() => {
    getBookDetails()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 016-7.743V12a8 8 0 01-6 7.743z"></path>
          </svg>
          <p className="text-lg font-semibold text-gray-700 mt-4">Loading data, please wait...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex items-center justify-center gap-8">
  <div className="w-60 h-80 overflow-hidden rounded-lg shadow-md">
    <img className="w-full h-full object-cover" src={book?.image} alt={book?.title} />
  </div>
  <div className="flex-1">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{book?.title}</h1>
    <Link to={`/authors/${book?.author._id}`} className="text-blue-600 hover:underline">
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">by {book?.author.name}</h3>
    </Link>
    <p className="text-gray-800 leading-relaxed mb-4">{book.bookDetails}</p>
    <span className="text-xl font-semibold text-gray-900">Published Date: <span className="font-normal text-gray-600">{book?.publishedDate}</span></span>
  </div>
</div>

  )
}

export default BookDetails
