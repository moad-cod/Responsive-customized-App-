import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Footer from './components/Footer'
const App = () => {
  return (
    <section className='flex flex-col min-h-screen '>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* other page content */}
      </main>
      <Footer />
    </section>
  )
}

export default App
