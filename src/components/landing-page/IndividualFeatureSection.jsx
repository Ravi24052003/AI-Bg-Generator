import React from 'react'

const IndividualFeatureSection = () => {
  return (
    <section className="individual-feature py-8">

    <div className="container mx-auto px-4">

      <div className="grid grid-cols-1 gap-8 ">

        <div className="individual-feature-card bg-white rounded shadow-lg overflow-hidden  ">
          <div className="flex items-center  max-[768px]:flex max-[768px]:flex-col ">
            <div className="w-1/2 max-[768px]:w-[90%]">
              <img
                src="https://source.unsplash.com/featured/1280x720/?product-catalog"
                alt="Feature Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 max-[768px]:w-[90%]">
              <h2 className="text-2xl font-bold mb-4">Creative Backgrounds</h2>
              <p className="text-gray-700">
                Generate stunning and unique backgrounds for your product catalogs with our AI-powered platform. Showcase your products in the best light possible.
              </p>
            </div>
          </div>
        </div>


        <div className="individual-feature-card bg-white rounded shadow-lg overflow-hidden">
          <div className="flex items-center  max-[768px]:flex max-[768px]:flex-col">
            
            <div className="w-1/2 max-[768px]:w-[90%]">
              <img
                src="https://source.unsplash.com/featured/1280x720/?product-catalog"
                alt="Feature Image"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-1/2 p-4 max-[768px]:w-[90%]">
              <h2 className="text-2xl font-bold mb-4">Save Time & Effort</h2>
              <p className="text-gray-700">
                Let our AI platform generate beautiful backgrounds for your product catalogs, saving you time and effort. Focus on what matters most - selling.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
  )
}

export default IndividualFeatureSection
