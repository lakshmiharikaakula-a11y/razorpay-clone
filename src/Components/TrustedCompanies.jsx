import React from 'react'
import airtel from '../assets/airtel.avif'
import akasa from '../assets/akasa.avif'
import ather from '../assets/ather.avif'
import blinkit from '../assets/blinkit.avif'
import lenskart from '../assets/lenskart.avif'
import indigo from '../assets/indigo.avif'
import myntra from '../assets/myntra.avif'
import nykaa from '../assets/nykaa.avif'
import ola from '../assets/ola.avif'
import urban from '../assets/urban.avif'
import zepto from '../assets/zepto.avif'
import zomato from '../assets/zomato.avif'
import '../styles/TrustedCompanies.css'

export default function TrustedCompanies() {
    let companies=[
       airtel,akasa,ather,blinkit,lenskart,indigo,myntra,nykaa,ola,urban,zepto,zomato 
    ]
  return (
    <div className="trusted">
    <div className="slide-wrapper">
    <div className='companies'>
      {companies.concat(companies).map((logo,i)=>{
        return <img key={i} src={logo} alt="logo" />
      })}
    </div>
    </div>
    </div>
  )
}
