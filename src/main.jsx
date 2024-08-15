import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home.jsx';
import Books from './components/Books.jsx';
import Authors from './components/Authors.jsx';
import Author from './components/Author.jsx';
import BookDetails from './components/BookDetails.jsx';
import NoData from './pages/NoData.jsx';
import SignInPage from './pages/SignInPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import store from './app/store.js';

import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/books',
        element:<Books/>
      },{
        path:'/authors',
        element:<Authors/>
      },{
        path:'/authors/:authorId',
        element:<Author/>
      },{
        path:'/books/:bookId',
        element:<BookDetails/>
      },
      {
        path:'/books/no-data',
        element:<NoData/>
      }
      
    ]
  },
  {
    path:'/signin',
    element:<SignInPage/>
  },{
    path:'/login',
    element:<LoginPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  

  
)
