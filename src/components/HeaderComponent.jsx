import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginStatus } from "../features/login/loginSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  const user = useSelector(state => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  async function handleLogout() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/logout`, {
        method: 'POST', // Use the correct method
        credentials: 'include', // Use 'credentials' instead of 'withCredentials'
      });
      
      if (response.ok) {
        // If the response is successful
        toast("Logout successful");
        dispatch(changeLoginStatus({
          loggedIn: false,
          user: null,
        }));
        console.log(user.name)
        navigate('/login');
      } else {
        // Handle error response
        toast.error("Logout failed");
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error("An error occurred during logout");
    }
  }

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-3xl font-extrabold">
          <Link to="/" className="text-white hover:text-gray-300">Libraria</Link>
        </h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-lg font-semibold hover:text-gray-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/books" className="text-lg font-semibold hover:text-gray-300 transition">Books</Link>
            </li>
            <li>
              <Link to="/authors" className="text-lg font-semibold hover:text-gray-300 transition">Authors</Link>
            </li>
          </ul>
        </nav>
        {loggedIn ? 
          <button onClick={handleLogout}>Logout</button>
          :
          <Link to="/login">Login</Link>
        }
         
      </div>
    </header>
  );
}

export default Header;
