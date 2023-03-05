import './index.css'

//import Header from '../Header'

const Careers = () => {
  return (
    <>
      <div className="careers-container">
        <h1>Available Jobs</h1>
        <div className="job-item-container">
          <div className="job-item">
            <h1 className="job-name">Architect</h1>
            <p className="job-description">2 to 3 years experience</p>
          </div>
          <div className="job-item">
            <h1 className="job-name">Site Engineer</h1>
            <p className="job-description">1 year experience</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/btejroop77/image/upload/v1677752570/arcnile%20web/Group_17_flobxn.svg"
          className="hero-cardboard-image"
          alt="hero cardboard"
        />
      </div>
    </>
  )
}

export default Careers
