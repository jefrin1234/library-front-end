import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <span className="text-4xl font-extrabold mb-2">Libraria</span>
        <p className="text-gray-400 text-center mb-4">
          Your go-to app for exploring and managing a world of books and authors.
        </p>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-300 hover:text-white transition">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="mt-6">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Libraria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
