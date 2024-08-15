// import { Outlet, useNavigate } from 'react-router-dom';
// import './App.css';
// import Footer from './components/Footer';
// import HeaderComponent from './components/HeaderComponent';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLoginStatus } from './features/login/loginSlice';

// function App() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const loggedIn = useSelector((state) => state.login.loggedIn);
//   const [loading, setLoading] = useState(true);

//   function verifyLogin() {
//     axios.get(`${import.meta.env.VITE_API_BASE_URL}/verify`, {
//       withCredentials: true
//     })
//       .then((response) => {
//         console.log(response);

//         dispatch(changeLoginStatus({
//           loggedIn: true,
//           user: response.data
//         }));
       
        
//       })
//       .catch((error) => {
//         console.log(error.message);

//         dispatch(changeLoginStatus({
//           loggedIn: false,
//           user: null
//         }));
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     verifyLogin();
//   }, []);

//   useEffect(() => {
//     if (!loading && !loggedIn) {
//       navigate('/login');
//     }
//   }, [loading, loggedIn, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <ToastContainer />
//       <div className='flex flex-col justify-between h-[100vh]'>
//         <HeaderComponent />
//         <main className='p-12'>
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;




import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      <ToastContainer />
      <div className='flex flex-col justify-between h-[100vh]'>
        <HeaderComponent />
        <main className='p-12'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;