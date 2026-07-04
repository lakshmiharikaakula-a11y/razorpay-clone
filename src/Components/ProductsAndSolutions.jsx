
import React,{useState} from 'react'
import { productSlides } from '../data/ProductsAndSolutionsData'
import '../styles/ProductsAndSolutions.css'

export default function ProductsAndSolutions() {
    let [pindex,setPindex]=useState(0)
    let firstslide=productSlides[pindex];
    let handlePrev=()=>{
       setPindex((prev)=>{
            if(prev===0)
                return productSlides.length-1;
            else{
                return prev-1;
            }
       })
    }
    let handleNext=()=>{
        setPindex((prev)=>{
            if(prev==productSlides.length-1){
                return 0;
            }
            else{
                return prev+1;
            }
        })
    }
  return (
        <section className="products-container">
            <h1>We have innovated at every instance, creating a disruption.</h1>
                <div className="card-container">
                <button onClick={handlePrev} className="left-arrow">←</button>
                {firstslide.cards.map((card,i)=>{
                    return(
                <div key={i} className={`product-card ${i===0?"first-card":"second-card"}`} >
                    <h2>{card.title}</h2>
                    <h1>{card.heading}</h1>
                    <p>{card.description}</p>
                    <div className="product-btns">
                    <button>Sign up</button>
                    <button>Know more</button>
                    </div>
                </div>)
              })}
               <button onClick={handleNext} className='Right-arrow'>→</button>
                </div> 
        </section>
  )
}
