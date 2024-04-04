import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="hero flex items-center justify-center h-screen max-[768px]:h-[50vh] max-[768px]:bg-center max-[768px]:bg-cover max-[768px]:bg-no-repeat mt-[-3.5px] max-[768px]:mt-0"  style={{ backgroundImage: "url('https://source.unsplash.com/featured/1280x720/?product-catalog')" }}>
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4 max-[768px]:text-2xl">Beautiful Backgrounds for Product Catalogs</h1>
      {/* <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</a> */}
      <Link to="/file-upload" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >Get Started</Link>
    </div>
  </section>
  )
}

export default HeroSection
