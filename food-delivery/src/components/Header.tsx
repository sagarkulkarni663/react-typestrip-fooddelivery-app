
import "./Header.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from '../redux-store/appStore'
const Header = () => {
  const card = useSelector((store: RootState) => store.cart.items)

  return (
    <>
      <div className="header">
        <div>
          <img className="logo" src="https://marketplace.canva.com/EAFJimMtZbE/1/0/800w/canva-green-white-modern-motorcycle-food-delivery-logo-T4JkzWdk-ZI.jpg" alt="foodlogo" />
        </div>

        <div className="navbar">
          <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
            <li><NavLink to="/cart">Cart ({card.length} items)</NavLink></li>
          </ul>
        </div>
      </div>

    </>

  )
}

export default Header