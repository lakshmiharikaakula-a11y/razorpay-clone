import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import TrustedCompanies from '../Components/TrustedCompanies'
import FinancialPlatform from '../Components/FinancialPlatform'
import IndustrySolution from '../Components/IndustrySolution'
import ProductsAndSolutions from '../Components/ProductsAndSolutions'
import DeveloperSection from '../Components/DeveloperSection'
import Footer from '../Components/Footer'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TrustedCompanies/>
      <FinancialPlatform/>
      <IndustrySolution/>
      <ProductsAndSolutions/>
      <DeveloperSection/>
      <Footer/>
    </div>
  )
}
