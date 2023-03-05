import './index.css'
//import Header from '../Header'

const AboutUs = () => {
  return (
    <div className="about-us-main-container">
      <img
        src="https://res.cloudinary.com/btejroop77/image/upload/v1677753183/arcnile%20mobile/shelf_qegdul.svg"
        alt="about us"
      />
      <div className="about-us-container">
        <p className="about-us-heading">
          <span style={{fontWeight: 700}}> Arcnile </span>
          aims to revolutionize the future of interiors &
          <span style={{fontWeight: 550, fontStyle: 'italic'}}>
            {' '}
            Modular Furniture{' '}
          </span>
          with
          <span style={{fontWeight: 550, fontStyle: 'italic'}}>
            {' '}
            affordable{' '}
          </span>
          costing,
          <span style={{fontWeight: 550, fontStyle: 'italic'}}>
            {' '}
            high quality{' '}
          </span>
          materials, post-delivery
          <span style={{fontWeight: 550, fontStyle: 'italic'}}>
            {' '}
            customer support{' '}
          </span>
          and
          <span style={{fontWeight: 550, fontStyle: 'italic'}}>
            {' '}
            no hidden charges.
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutUs
