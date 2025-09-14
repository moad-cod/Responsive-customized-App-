import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex gap-4 justify-center items-center mb-4 md:mb-0">
          <img src="public/logo.svg" alt="/" />
          <div>
            <h2 className="text-lg font-semibold">Photographer</h2>
            <p className="text-sm opacity-80">© 2025 All rights reserved.</p>
          </div>
        </div>

      
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">About</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>
        </div>


        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
