import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
      <Link to={`/books/${book._id}`}><div className="w-48 h-64 overflow-hidden mb-4  ">
        <img className="w-full h-full object-cover lg:text-center" src={book.image} alt={book.title} />
      </div></Link>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
       <Link to={`/authors/${book.author._id}`}><h3 className="text-lg text-gray-600">by {book.author.name}</h3></Link>
      </div>
    </div>
  );
}

export default BookCard;
