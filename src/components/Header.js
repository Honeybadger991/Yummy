import logo from '../assets/yummy-high-resolution-logo-color-on-transparent-background.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-wrapper">
        <NavLink to="/" className="logo-wrapper">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
    </header>
  )
}

export default Header