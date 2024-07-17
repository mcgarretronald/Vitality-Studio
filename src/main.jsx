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
import Booking from './Components/Booking/booking.jsx';
import Profile from './Components/Trainer-page/profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    path: "/booking",
    element: <Booking />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
