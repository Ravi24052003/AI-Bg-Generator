import React from 'react'

const FAQsection = () => {
  return (
    <section className="faq py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="faq-card bg-white rounded shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold p-4">Can I customize the background colors?</h3>
            <p className="text-gray-700 p-4">
              Yes, our platform allows you to easily customize the background colors to match your brand and product aesthetics.
            </p>
          </div>
          <div className="faq-card bg-white rounded shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold p-4">Can I generate backgrounds for different product categories?</h3>
            <p className="text-gray-700 p-4">
              Absolutely! Our AI platform is designed to generate beautiful backgrounds for a wide range of product categories.
            </p>
          </div>
          <div className="faq-card bg-white rounded shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold p-4">Is the platform compatible with all e-commerce platforms?</h3>
            <p className="text-gray-700 p-4">
              Yes, our platform is compatible with all major e-commerce platforms, including Shopify, WooCommerce, Magento, and more.
            </p>
          </div>
          <div className="faq-card bg-white rounded shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold p-4">Can I use my own images for backgrounds?</h3>
            <p className="text-gray-700 p-4">
              Currently, our platform generates backgrounds using a curated library of high-quality images. However, we are working on adding custom image support in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQsection
