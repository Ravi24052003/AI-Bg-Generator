import React from 'react'

const ContactUsSection = () => {
  return (
    <section className="contact py-8">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="max-w-lg mx-auto p-4">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default ContactUsSection
