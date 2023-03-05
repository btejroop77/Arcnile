import {Component} from 'react'
//import {HiMenuAlt3} from 'react-icons/hi'
//import {RxDotFilled} from 'react-icons/rx'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-text">Arcnile Furnitures.</h1>

        <ul className="header-menu">
          <li className="header-menu-item">
            <Link to="/" className="header-menu-item">
              Home
            </Link>
          </li>
          <li className="header-menu-item">
            <Link to="/about-us" className="header-menu-item">
              About Us
            </Link>
          </li>
          <li className="header-menu-item">
            <Link to="/contact-us" className="header-menu-item">
              Contact Us
            </Link>
          </li>
          <li className="header-menu-item">
            <Link to="/faq" className="header-menu-item">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)
