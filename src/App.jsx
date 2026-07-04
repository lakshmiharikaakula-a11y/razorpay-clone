// import React from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import TrustedCompanies from './Components/TrustedCompanies'
// import FinancialPlatform from './Components/FinancialPlatform'
// import IndustrySolution from './Components/IndustrySolution'
// import ProductsAndSolutions from './Components/ProductsAndSolutions'
// import DeveloperSection from './Components/DeveloperSection'
// import Footer from './Components/Footer'
// import Registration from './pages/Registration'


// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <TrustedCompanies/>
//       <FinancialPlatform/>
//       <IndustrySolution/>
//       <ProductsAndSolutions/>
//       <DeveloperSection/>
//       <Footer/>
//       <Registration/>
//     </div>
//   )
// }
import React from 'react'
import Home from './pages/Homepage'
import Registration from './pages/Registration'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import Paymentspage from './pages/Paymentspage'
export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/payments" element={<Paymentspage/>}/>
      </Routes>
    </Router>
  )
}

