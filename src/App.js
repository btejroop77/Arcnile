import {Component} from 'react'

//import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

//In V6 Switch is changed to Routes
//each route component prop changed to element prop
//In V6 Redirect is changed to Navigate

//REFER to ReactRouter Website!!!

/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ouraim" element={<OurAim />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/not-found" element={<NotFound />} />
          <Navigate to="/not-found" />
        </Routes>
</BrowserRouter>*/
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import OurAim from './components/OurAim'
import Careers from './components/Careers'
import NotFound from './components/NotFound'
import Header from './components/Header'

import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/our-aim" component={OurAim} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
