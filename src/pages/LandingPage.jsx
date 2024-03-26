import React from 'react'
import HeroSection from "../components/landing-page/HeroSection"
import FeatureSection from "../components/landing-page/FeatureSection"
import IndividualFeatureSection from "../components/landing-page/IndividualFeatureSection"
import BlogSection from "../components/landing-page/BlogSection"
import FAQsection from "../components/landing-page/FAQsection"
import NewsletterSubscription from "../components/landing-page/NewsletterSubscription"
import ContactUsSection from "../components/landing-page/ContactUsSection"
import Footer from "../components/landing-page/Footer"
import MapSection from '../components/landing-page/MapSection'

const LandingPage = () => {
  return (
   <>
    <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <a href="#"><img src="logo.png" alt="Logo" /></a>
            <ul className="flex space-x-4">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Blog</a></li>
              <li>Login/Signup</li>
            </ul>
          </nav>
        </div>
      </header>

     
      <HeroSection />
      
    
<FeatureSection />
    

<IndividualFeatureSection />
   

    <BlogSection />
 

<FAQsection />
  

<NewsletterSubscription />
   

<ContactUsSection />
    

<MapSection />

      <Footer />
   
   </>
  )
}

export default LandingPage
