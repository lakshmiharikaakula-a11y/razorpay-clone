import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductsAndSolutions from '../Components/ProductsAndSolutions'
import TrustedCompanies from '../Components/TrustedCompanies'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/ProductsAndSolutions.css'
import '../styles/TrustedCompanies.css'
import paymentshero from '../assets/payments.avif'
import grofers from '../assets/p1.avif'
import airtel from '../assets/airtel.avif'
import bookmyshow from '../assets/book my show.avif'
import '../styles/Paymentspage.css'
import DeveloperSection from '../Components/DeveloperSection'

export default function Paymentspage() {
  return (
    <div>
      <Navbar/>
      <div className="hero">
      <div className="hero-content">
        <h1>Supercharge your business with Razorpay Payment Aggregator</h1>
        <p>
          With the easiest integration, completely online onboarding, feature
          filled checkout and best in class performance, quickly go live with
          Razorpay and experience the future of payments.
        </p>
        <div className="hero-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="doc-btn">View Documentation</button>
        </div>
        <div className="trusted-logos">
          <img src={airtel} alt="airtel" />
          <img src={grofers} alt="grofers" />
          <img src={bookmyshow} alt="BookMyShow" />
        </div>
      </div>

      <div className="hero-image">
        <img src={paymentshero} alt="Payment Illustration" />
      </div>
      </div>
      <TrustedCompanies/>
      <ProductsAndSolutions/>
      <DeveloperSection id="upi"/>
      <Footer/>
    </div>
  )
}
