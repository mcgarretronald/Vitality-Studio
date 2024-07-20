import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/home.jsx';
import TrainerPage from './Components/Trainer-page/trainer.jsx';
import ShopPage from './Components/Shop/shop.jsx';
import Profile from './Components/Trainer-page/profile.jsx';
import Membership from './Components/Membership/Membership.jsx';
import TrainerBooking from './Components/Booking/booking.jsx';
import Admin from './Components/Admin/admin.jsx';
import ErrorPage from './Components/Error/error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/trainer",
    element: <TrainerPage />,
  },
  {
    path: "/trainerprofile",
    element: <Profile/>,
  },
  {
    path: "/member",
    element: <Membership />,
  },
  {
    path: "/booking",
    element: <TrainerBooking />,
  },
  {
    path: "/admin",
    element: <Admin/>,
  }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
