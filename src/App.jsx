import React from 'react'
import Home from './pages/home/home'
import About from './pages/about/about'
import Events from './pages/events/events'
import Sponsors from './pages/sponsors/sponsors'
import Services from './pages/services/services'
import Team from './pages/team/team'
import Footer from './pages/footer/footer'



const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Events />
      <Services/>
      <Sponsors /> 
      <Team />
      <Footer />
    </div>
  )
}

export default App
