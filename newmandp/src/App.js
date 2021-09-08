
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import WhyUs from './components/WhyUs';
import Slider from './components/Slider.js'
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Aboutus from './Pages/Aboutus';
import Household from './Pages/Household'
import Corporate from './Pages/Corporate'
import Vehicle from './Pages/Vehicle'
import Loading from './Pages/Loading'
import Commercial from './Pages/Comercial'
import Warehouse from './Pages/Warehouse'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Intro />
            <Contact />
            <About />
            <WhyUs />
            <Services />
            <Testimonials />
            <Clients />
            <Footer />
          </Route>
          <Route path='/about-us'>
            <Header />
            <Aboutus />
            <Clients />
            <Footer />
          </Route>
          <Route path='/household-relocation'>
            <Header />
            <Household />
            <Clients />
            <Footer />
          </Route>
          <Route path='/corporate-relocation'>
            <Header />
            <Corporate />
            <Clients />
            <Footer />
          </Route>
          <Route path='/loading-unloading'>
            <Header />
            <Loading />
            <Clients />
            <Footer />
          </Route>
          <Route path='/vehicle-transportation'>
            <Header />
            <Vehicle />
            <Clients />
            <Footer />
          </Route>
          <Route path='/commercial'>
            <Header />
            <Commercial />
            <Clients />
            <Footer />
          </Route>
          <Route path='/warehouse'>
            <Header />
            <Warehouse />
            <Clients />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
