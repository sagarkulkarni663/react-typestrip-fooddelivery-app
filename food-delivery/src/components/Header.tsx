
import "./Header.css"


const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img className="logo" src="https://marketplace.canva.com/EAFJimMtZbE/1/0/800w/canva-green-white-modern-motorcycle-food-delivery-logo-T4JkzWdk-ZI.jpg" alt="foodlogo" />
        </div>

        <div className="navbar">
          <ul >
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

    </>

  )
}

export default Header