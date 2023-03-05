import './index.css'

//import Header from '../Header'

import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandMeta} from 'react-icons/tb'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-main-container">
        <div className="map-container">
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752574/arcnile%20web/Rectangle_49_p4aook.svg"
            alt="map zoom"
            className="map-image"
          />
        </div>

        <div className="address-details-container">
          <h1 className="address-heading">GET IN TOUCH WITH US</h1>
          <p className="address-subheading">
            Address: Plot no: 4, PH:III, IDA Jeedimetla, Hyderabad, Telangana
            500055
          </p>
          <p className="address-subheading">Timings: Mon-Fri 10AM - 6PM </p>
          <p className="address-subheading">Contact: +91 - 9907990763</p>
          <div className="find-us-logo-container">
            <p className="address-subheading">Find us on </p>
            <div className="social-link-container">
              <button className="social-link-button">
                <AiOutlineInstagram />
              </button>
              <button className="social-link-button">
                <TbBrandMeta />
              </button>
              <button className="social-link-button">
                <FaTwitter />
              </button>
              <button className="social-link-button">
                <AiOutlineYoutube />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
