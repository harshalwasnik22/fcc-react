import React from 'react'
import Home from './pages/home/home'
import About from './pages/about/about'
import Events from './pages/events/events'
import Sponsors from './pages/sponsors/sponsors'
import Services from './pages/services/services'
import Team from './pages/team/team'
import Footer from './pages/footer/footer'
import Navbar from './components/navbar/navbar'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services/>
      <Events />
      <Sponsors /> 
      <Team />
      <Footer />
    app
    </div>
  )
}

export default App
