import './index.css'
//import Header from '../Header'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/btejroop77/image/upload/v1678000416/arcnile%20web/Rectangle_30_n1gkwi.svg"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-description">
          We are sorry, the page you requested could not be found.
        </p>
        <Link to="/" className="nav-link">
          <button className="home-button">Return to Home</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
