import './index.css'

//import Header from '../Header'

//const questionsList = []

const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        <h1 className="faq-heading">FAQ (Frequently asked questions)</h1>
        <div className="questions-list-container">
          <div className="question-item">
            <p className="question">Why should you go for Bespoke Furniture?</p>
            <p className="answer">
              One of the reasons to go for Bespoke Furniture is you get the
              exact custom made design!
            </p>
          </div>
          <div className="question-item">
            <p className="question">
              What can be customised under Bespoke Furniture?
            </p>
            <p className="answer">
              Almost all items can be customised according to your needs! Sofas
              & Sectionals, Chairs, Tables, Storage
            </p>
          </div>
          <div className="question-item">
            <p className="question">
              How is Modular Furniture helpful for office spaces?
            </p>
            <p className="answer">
              Modular Furniture is a big step up from traditional office
              furniture, as it offers more customization options and better
              value for money. Change the way your workspace looks!
            </p>
          </div>
          <div className="question-item">
            <p className="question">What is Bespoke Furniture?</p>
            <p className="answer">
              Custom made designs which fit your needs and look exactly like you
              imagined it to be.
            </p>
          </div>
          <div className="question-item">
            <p className="question">What is Modular Kitchen?</p>
            <p className="answer">
              Beautifully modified units and furniture for kitchen that enhances
              your idea of perfect home is known as the Modular Kitchen.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
