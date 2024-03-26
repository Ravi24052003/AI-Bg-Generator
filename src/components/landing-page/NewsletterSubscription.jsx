import React from 'react'

const NewsletterSubscription = () => {
  return (
    <section className="newsletter py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-4">
            Get the latest updates, news, and special offers delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto p-2">
            <div className="flex items-center border border-gray-300 rounded-md">
              <input
                type="email"
                id="email"
                className="mr-2 py-2 px-4 outline-none flex-grow"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSubscription
