import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </section>
  )
}

export default App
