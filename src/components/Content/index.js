import './index.css'
import {Component} from 'react'
import {FiPlay} from 'react-icons/fi'
import {FiChevronDown} from 'react-icons/fi'
import {BiClipboard} from 'react-icons/bi'
import {BiPen} from 'react-icons/bi'
import {BsBoxSeam} from 'react-icons/bs'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {RiGoogleLine} from 'react-icons/ri'

import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandMeta} from 'react-icons/tb'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'

import {Link} from 'react-router-dom'

class Content extends Component {
  openModal = () => {
    console.log('Video button clicked!')
  }

  render() {
    return (
      <>
        <div className="content-container">
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752574/arcnile%20web/Group_11_focjf4.svg"
            alt="hero"
            className="hero-image"
          />
          <div className="play-button-text-div">
            <button onClick={this.openModal} className="rounded-button">
              <FiPlay height={36} width={36} />
            </button>
            <p className="button-text">Play Video</p>
          </div>
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752570/arcnile%20web/Group_17_flobxn.svg"
            className="hero-cardboard-image"
            alt="hero cardboard"
          />
          <button className="rounded-button-fixed">
            <FiChevronDown height={36} width={36} />
          </button>
        </div>
        <div className="caption-container">
          <h1 className="arcnile-caption">
            Arcnile is your one-stop beautifully customized
            <span style={{fontWeight: 500, fontStyle: 'italic'}}>
              {' '}
              Bespoke Furnitures.{' '}
            </span>
          </h1>
        </div>
        <div className="side-heading-container">
          <h1 className="process-heading">How we start the process..</h1>
        </div>
        <div className="content-container">
          <div className="process-card-container">
            <div className="process-card">
              <h1 className="process-number">1</h1>
              <div className="process-content-card">
                <div className="process-name-icon">
                  <h1 className="process-name">Assessment</h1>

                  <BiClipboard />
                </div>
                <p className="process-description">
                  We will thoroughly understand your requirements during a site
                  visit.
                </p>
              </div>
            </div>
            <div className="process-card">
              <h1 className="process-number">2</h1>
              <div className="process-content-card">
                <div className="process-name-icon">
                  <h1 className="process-name">Design</h1>

                  <BiPen />
                </div>
                <p className="process-description">
                  You will receive a design that considers your space budget and
                  storage requirements.
                </p>
              </div>
            </div>
            <div className="process-card">
              <h1 className="process-number">3</h1>
              <div className="process-content-card">
                <div className="process-name-icon">
                  <h1 className="process-name">Installation</h1>
                  <BsBoxSeam />
                </div>
                <p className="process-description">
                  The components and pieces are installed in your home, followed
                  by a final examination.
                </p>
              </div>
            </div>
            <div className="process-card">
              <h1 className="process-number">4</h1>
              <div className="process-content-card">
                <div className="process-name-icon">
                  <h1 className="process-name">Warranty</h1>
                  <AiOutlineSafetyCertificate />
                </div>
                <p className="process-description">
                  All of our designs and hardware are backed by a 5-year
                  guarantee and a year of free maintanance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-container">
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752574/arcnile%20web/Group_13_hgwkci.svg"
            alt="step one"
            className="step-image"
          />
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752573/arcnile%20web/Group_14_biljdu.svg"
            alt="step two"
            className="step-image"
          />
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752572/arcnile%20web/Group_15_cwakks.svg"
            alt="step three"
            className="step-image"
          />
          <img
            src="https://res.cloudinary.com/btejroop77/image/upload/v1677752574/arcnile%20web/Group_16_twsx5s.svg"
            alt="step four"
            className="step-image"
          />
        </div>
        <div className="projects-container">
          <div className="projects-heading-subheading">
            <h1 className="process-heading">Explore our latest projects</h1>
            <p className="projects-side-heading">
              Presenting the one-stop solution for luxury interiors!
            </p>
          </div>
          <div className="project-list-container">
            <img
              src="https://res.cloudinary.com/btejroop77/image/upload/v1677752572/arcnile%20web/Rectangle_17_gg4ytz.svg"
              alt="step one"
              className="project-image"
            />

            <img
              src="https://res.cloudinary.com/btejroop77/image/upload/v1677752572/arcnile%20web/Rectangle_18_oymc9j.svg"
              alt="step two"
              className="project-image"
            />
            <img
              src="https://res.cloudinary.com/btejroop77/image/upload/v1677752572/arcnile%20web/Rectangle_19_zavuky.svg"
              alt="step three"
              className="project-image"
            />
          </div>
        </div>
        <div className="caption-container">
          <h1 className="arcnile-caption">
            Our
            <span style={{fontWeight: 500, fontStyle: 'italic'}}>
              {' '}
              Bespoke Furniture{' '}
            </span>
            has a sturdy taste with an antique touch
          </h1>
        </div>
        <div className="reviews-container">
          <h1 className="process-heading">Our Reviews</h1>
          <div className="review-container">
            <div className="review-card">
              <div className="ratings-icon-container">
                <div className="ratings-container">
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                </div>
                <div className="icon-container">
                  <RiGoogleLine />
                </div>
              </div>
              <div className="rating-content-container">
                <p className="rating-description">
                  Strongly recommend to people who are looking for minimalist
                  design in their interior looks..
                </p>
              </div>
              <div className="profile-container">
                <button className="rounded-text orange-bg">
                  <p className="profile-first-letter ">T</p>
                </button>

                <p className="profile-name">Tejroop</p>
              </div>
            </div>
            <div className="review-card">
              <div className="ratings-icon-container">
                <div className="ratings-container">
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                </div>
                <div className="icon-container">
                  <RiGoogleLine />
                </div>
              </div>
              <div className="rating-content-container">
                <p className="rating-description">
                  Arcnile Team is so professional and top-notch at their work,
                  Loved it! ThanksTeam.
                </p>
              </div>
              <div className="profile-container">
                <button className="rounded-text grey-bg">
                  <p className="profile-first-letter ">A</p>
                </button>

                <p className="profile-name">Akash Kumar</p>
              </div>
            </div>
            <div className="review-card">
              <div className="ratings-icon-container">
                <div className="ratings-container">
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiOutlineStar />
                </div>
                <div className="icon-container">
                  <RiGoogleLine />
                </div>
              </div>
              <div className="rating-content-container">
                <p className="rating-description">
                  We purchased our entire home furniture from Arcnile. We have
                  referred all our friends and family to purchase furniture
                  here.
                </p>
              </div>
              <div className="profile-container">
                <button className="rounded-text violet-bg">
                  <p className="profile-first-letter ">P</p>
                </button>

                <p className="profile-name">Pradeep</p>
              </div>
            </div>
            <div className="review-card">
              <div className="ratings-icon-container">
                <div className="ratings-container">
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                  <AiFillStar style={{color: '#E1CB00'}} />
                </div>
                <div className="icon-container">
                  <RiGoogleLine />
                </div>
              </div>
              <div className="rating-content-container">
                <p className="rating-description">
                  Happy with quality and professionalism and range of products.
                </p>
              </div>
              <div className="profile-container">
                <button className="rounded-text blue-bg">
                  <p className="profile-first-letter ">S</p>
                </button>

                <p className="profile-name">Showri Raju </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="address-quicklinks-container">
            <div className="address-container">
              <h1 className="address-title">Arcnile Furnitures.</h1>
              <p className="address-detail">
                Plot no: 4, PH:III, IDA Jeedimetla, Hyderabad, Telangana 500055
              </p>
              <p className="address-phone-number">+91 - 9907990763</p>
            </div>
            <div className="quicklinks-container">
              <h1 className="quick-link-heading">Quick Links</h1>
              <div className="each-link-container">
                <Link to="/our-aim" className="nav-link">
                  <h1 className="each-link">Our Aim</h1>
                </Link>
                <Link to="/" className="nav-link">
                  <h1 className="each-link">Home</h1>
                </Link>
                <Link to="/careers" className="nav-link">
                  <h1 className="each-link">Careers</h1>
                </Link>
                <Link to="/about-us" className="nav-link">
                  <h1 className="each-link">About Us</h1>
                </Link>
                <Link to="/faq" className="nav-link">
                  <h1 className="each-link">FAQ</h1>
                </Link>
                <Link to="/contact-us" className="nav-link">
                  <h1 className="each-link">Contact Us</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-end-container">
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
            <hr className="horizontal-line" />
            <p className="copyright-text">
              2023 © All rights reserved. design by TR
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Content
