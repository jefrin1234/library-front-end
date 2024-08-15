import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Books() {
  const authorRef = useRef()
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([]);
  const [authors,setAuthors] = useState([])
  const navigate = useNavigate()

  async function getAllBooks(authorId) {
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books${authorId ? `?author=${authorId}` : ''}`);
      const books = await response.json();
      if( books.message === 'No books found'){
          navigate('/books/no-data')
      }
      setBooks(books);
      setLoading(false);
      console.log(books);
    } catch (err) {
      console.error('Error fetching books:', err);
      setLoading(false); 
    }
  }

  async function getAllAuthors(){

    const response = await fetch(`http://localhost:3000/authors`)
    const allAuthors = await response.json()
    setLoading(false)
    setAuthors(allAuthors)
    console.log(allAuthors);
    }
  
    async function handleSelectAuthor(e){
       e.preventDefault()
       const authorId = authorRef.current.value
       getAllBooks(authorId)
    }

    useEffect(()=>{
      getAllBooks();
    },[])


  useEffect(() => {
   
    getAllAuthors();
  }, []); 

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
    <section>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>
          All Books
        </h1>
        <select
            className=" p-2 border border-gray-300 rounded"
            ref={authorRef}
            defaultValue={"Select an author"}
            onChange={handleSelectAuthor}
          >
            <option value="" >
              Select an author
            </option>
            {authors.map((author) => (
              <option key={author._id} value={author._id}>
                {author.name}
              </option>
            ))}
          </select>
      </div>

      <div className='mt-5 grid grid-cols-3 gap-4 '>
        {
          books.map((book)=>{
            return (
              <BookCard key={book._id} book={book}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Books
