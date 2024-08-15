import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-10">
        <div>
          <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Welcome to Libraria</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-500 mb-4">About Our Library App</h3>
          <p className="text-gray-700 leading-8 mb-8">
            Welcome to our Library App, your one-stop solution for managing and exploring a vast collection of books and authors. Designed with ease of use and accessibility in mind, our app offers a seamless experience for both book enthusiasts and library administrators.
            <br /><br />
            <span className="font-bold text-blue-600">Our Mission</span><br />
            Our mission is to revolutionize the way you interact with your library by providing a modern, user-friendly platform that simplifies book and author management. Whether you're looking to discover new books, keep track of your reading list, or manage a library collection, our app is here to assist you.
          </p>
        </div>
        <div className="text-center">
          <Link to="/books">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Explore
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
