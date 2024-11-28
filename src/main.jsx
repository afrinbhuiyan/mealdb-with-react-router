import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Categories from './components/Categories/Categories.jsx';
import Home from './components/Home/Home.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php")  ,
    element: <Home></Home>,
    // children: [
    //   {
    //     path: '/post/:postidCategory',
    //     loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.postidCategory}`),
    //     element: <PostDetails></PostDetails>
    //   }
    // ]
  },
  {
    path: 'post/:postidCategory',
    loader: ( { params } ) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.postidCategory}`),
    element: <PostDetails></PostDetails>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
