import React from 'react'

const FeatureSection = () => {
  return (
    <section className="py-8">
    {/* Features Section */}
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-8 max-[768px]:flex-col max-[768px]:flex">

        <div className=" text-center">
          <div className="icon mb-4">
            <i className="fas fa-palette text-blue-500 text-5xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">Creative Backgrounds</h2>
          <p className="text-gray-700">
            Generate stunning and unique backgrounds for your product catalogs with our AI-powered platform.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>


        <div className="feature-card text-center">
          <div className="icon mb-4">
            <i className="fas fa-check-circle text-green-500 text-5xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">Easy Integration</h2>
          <p className="text-gray-700">
            Seamlessly integrate our platform with your e-commerce store to enhance the visual appeal of your products.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>


        <div className="feature-card text-center">
          <div className="icon mb-4">
            <i className="fas fa-clock text-yellow-500 text-5xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">Save Time &amp; Effort</h2>
          <p className="text-gray-700">
            Let our AI platform generate beautiful backgrounds for your product catalogs, saving you time and effort.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>


      </div>
    </div>
  </section>
  )
}

export default FeatureSection
