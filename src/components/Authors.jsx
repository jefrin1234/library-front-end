import React, { useEffect, useState } from 'react'
import AuthorCard from './AuthorCard'

function Authors() {

  const [authors,setAuthors] = useState([])
  const [loading,setLoading] = useState()

  async function getAllAuthors(){

  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors`)
  const allAuthors = await response.json()
  setLoading(false)
  setAuthors(allAuthors)
  console.log(allAuthors);
  }

 
   useEffect(()=>{
    getAllAuthors()
   },[])

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
    <div className='grid grid-cols-3 gap-3'>
      {
        authors.map((author)=>{
          return (
          <AuthorCard key={author._id} author={author}/>
         ) })
      }
    </div>
  )
}

export default Authors
