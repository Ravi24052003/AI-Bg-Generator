import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl text-white font-bold">AI Background Generator</h3>
          <p className="text-gray-400">A product by Example Corp.</p>
        </div>
        <div className="social-icons">
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
