import React,{useState,useEffect} from 'react';
import Hero1 from '../assets/hero1.avif';
import Hero2 from '../assets/hero2.avif';
import Hero3 from '../assets/hero3.avif';
import Hero4 from '../assets/hero4.avif';
import Hero5 from '../assets/hero5.avif';
import '../styles/Hero.css';
 const slides = [
  {
    title: ( 
      <>
      <span className='highlight'>Automated Payroll Solution </span>
      </>
      ),
    description: "Automated Payroll & Compliances | Built for Startups & Enterprises",
    image: Hero1,
  },
  {
    title: (
      <>
      <span className='highlight'>Easy In-store Payments</span>
      </>),
    description: "Quick Payments | Seamless Integration | Top-Tier UPI Stack",
    image: Hero2,
  },
  {
    title: (
      <>
      <span className='highlight'>Advanced Payment Solution</span>
      </>), 
    description: "100+ Payment Methods|Easy Integration|Best-in-Class Performance",
    image: Hero3,
  },
  {
    title: (
      <>
      <span className='highlight'>International Payments </span>
      </>),
    description:"Accept cards, bank transfers and Apple Pay from 180+ countries",
    image: Hero4,
  },
  {
    title:(
      <>
      <span className='highlight'>Effortless Business Banking </span>
      </>),
    description:"Track, manage and grow your business easily.",
    image: Hero5,
  }
];
export default function Hero() {
    //current slide index
    let [index,setIndex]=useState(0);
    //auto slider
    useEffect(()=>{
        const Interval=setInterval(()=>{
            setIndex((prev)=>{
        if(prev===slides.length-1)
            return 0;
        else
            return prev+1;
    });
},3000)
    return ()=> clearInterval(Interval)
    },[]);

   let nextSlide=()=>{
    setIndex((prev)=>{
        if(prev===slides.length-1)
            return 0;
        else
            return prev+1;
    })
   }
   let prevSlide=()=>{
    setIndex((prev)=>{
        if(prev===0)
            return slides.length-1;
        else
            return prev-1;
    })
   }
  return(
    <>
      <section className="hero">
        <button onClick={prevSlide} className="hero-arrow heroleft-arrow">
              <i className="fas fa-chevron-left"></i>
        </button>
        <div className="hero-left">
             <h1>{slides[index].title}<br/>
                for founders defying all odds
             </h1>
             <p>{slides[index].description}</p>
             <div className="hero-buttons">
               <button>Sign Up Now</button>
               <button>Know More</button>
             </div>
        </div>
        <div className="hero-right">
                <img src={slides[index].image} alt="hero" />
        </div>
        <button onClick={nextSlide} className="hero-arrow heroright-arrow"> 
             <i className="fa fa-chevron-right"></i>
        </button>
        <div className="dots">
            {slides.map((_,i)=>{
                return (<span key={i} onClick={()=>setIndex(i)} className={index===i?"dot active":"dot"}></span>);
            })}
        </div>
      </section>
      </>
  )
}
