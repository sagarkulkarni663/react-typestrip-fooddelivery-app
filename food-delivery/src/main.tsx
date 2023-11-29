import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import AboutUs from './components/AboutUs.tsx'
import ContactUs from './components/ContactUs.tsx'
import Resturantcard from "./components/Resturantcard"
import MoreInfo from './components/MoreInfo.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Resturantcard />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/mobiles/:id",
        element: <MoreInfo />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
