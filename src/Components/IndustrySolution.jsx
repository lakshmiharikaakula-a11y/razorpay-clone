import React,{useState} from 'react'
import { industryData } from '../data/Industrydata';
import '../styles/IndustrySolution.css'
export default function IndustrySolution() {
  let industrytabs=["E-Commerce","Education","BFSI","SaaS","Freelancer"]
  let [activeIndustry,setactiveIndustry]=useState(industrytabs[0]);
  const currentData = industryData[activeIndustry];
  return (
    <section className="industry-section">
      <h1>Powering every industry.<br/> Powering all disruptors.</h1>
      {/* //displayind tabs */}
      <ul className='industrynav-lists'>
      {industrytabs.map((industrytab,i)=>{
        return (<li   key={i}><button className={activeIndustry===industrytab?"active":""} onClick={()=>{setactiveIndustry(industrytab)}}>{industrytab}</button></li>)
      })}
      </ul>
      {/* content */}
      {/* accessing tabs data using map from industrydata.js file */}
      <div className="industry-card">
        <img src={currentData.image} alt={activeIndustry}/>
          <div className="industry-content">
            <h2>{currentData.title}</h2>
            <p>{currentData.description}</p>
            <div className='industry-companies'>
           {currentData.companies.map((company, i) => (
                <span key={i}>{company}</span>
              ))}
            </div>
             <button>See Solutions →</button>
       </div>
      </div>
    
    </section>
  )
}
