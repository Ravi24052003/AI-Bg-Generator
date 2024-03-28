import React from 'react'

const BlogSection = () => {
  return (
    <section className="blog py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>

      <div className="grid grid-cols-3 gap-8 max-[768px]:flex max-[768px]:flex-col ">

        <div className="blog-card bg-white rounded shadow-lg overflow-hidden">
          <div className="blog-image">
            <img
              src="blog1.jpg"
              alt="Blog Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">10 Tips for Stunning Product Catalog Backgrounds</h3>
            <p className="text-gray-700">
              Learn some amazing tips and tricks to make your product catalog backgrounds stand out from the crowd.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>


        <div className="blog-card bg-white rounded shadow-lg overflow-hidden">
          <div className="blog-image">
            <img
              src="blog2.jpg"
              alt="Blog Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">The Importance of Visuals in E-commerce</h3>
            <p className="text-gray-700">
              Discover why visuals play a crucial role in enhancing the customer experience and driving conversions in e-commerce.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>


        <div className="blog-card bg-white rounded shadow-lg overflow-hidden">
          <div className="blog-image">
            <img
              src="blog3.jpg"
              alt="Blog Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">The Future of AI in Product Photography</h3>
            <p className="text-gray-700">
              Explore how AI is revolutionizing product photography, making it easier and more accessible for businesses of all sizes.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>

        
      </div>
    </div>
  </section>
  )
}

export default BlogSection
