import React,{useState,useEffect} from 'react'
import {products} from '../data/Financedata.js';
import '../styles/FinancialPlatform.css'

export default function FinancialPlatform() {
    let tabs=[
        "Build AI Native",
        "Accept Payments",
        "Make Payouts",
        "Start Business Banking",
        "Automate Payroll",
        "Get Credit & Loans"
    ];
    //for hightlightin the tab when clicking.
    let [activeTab,setActiveTab]=useState(tabs[0]);
    //for In product section BuildAI tab card carousel
    let [currentIndex,setCurrentIndex]=useState(0);
    //if we have less than 4 cards
    let showCarousel=products[activeTab].length > 4;
    //for responsive ness 
    let [isMobile,setisMobile]=useState(false);
    //for the smallmobile 
    let [isSmallMobile,setIsSmallMobile]=useState(false);
    //for the mobileview carousel
    let [mobileindex,setmobileindex]=useState({
         "Build AI Native":0,
        "Accept Payments" :0,
        "Make Payouts":0,
        "Start Business Banking":0,
        "Automate Payroll":0,
        "Get Credit & Loans":0
    })
    useEffect(()=>{
      const handleResize=()=>{
      if(window.innerWidth<=1024){
        setisMobile(true);
      }
      else{
        setisMobile(false);
      }
      setIsSmallMobile(window.innerWidth <= 480);
    }
    handleResize(); //runs when component loads
    window.addEventListener('resize',handleResize);
     return () => {
    window.removeEventListener("resize", handleResize);
  };
    },[])
    let visibleCards=showCarousel
                    ?products[activeTab].slice(currentIndex,currentIndex+4)//for taking small portion from the array i.e 4 cards at a time
                    :products[activeTab];
    //for the  desktop carousel of BuildAI tab
    let nextSlide=()=>{
        if(currentIndex<products[activeTab].length-4){
                setCurrentIndex( currentIndex+1)
            }
    }
     let prevSlide=()=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1);
        }
    }
    //for the mobilecarouselarrows
    let nextMobileSlide=(tab)=>{
      if(mobileindex[tab]<products[tab].length-4){
        setmobileindex({...mobileindex,
                        [tab]:mobileindex[tab]+1
        })
      }
    }
    let prevMobileSlide=(tab)=>{
      if(mobileindex[tab]>0){
          setmobileindex({...mobileindex,
                  [tab]:mobileindex[tab]-1
          });
      }
    }
   
  return (
    <>
    {/* for rendering in the mobile and desktop differently we write conditinoal rendering */}
      {isMobile ?
      (
          <section> 
          <h2>The <span className='financehighlight'>all-in-one finance platform </span>you've been looking for</h2>
          <p>with Razorpay, you can|</p>
            {tabs.map((tab,i)=>{
            // mobile carousel logic
            const hasCarousel=products[tab].length>4;
            const visibleMobileCards=isSmallMobile
                                    ? products[tab]
                                    : (hasCarousel 
                                      ? products[tab].slice(mobileindex[tab],mobileindex[tab]+4)
                                      :products[tab])
           return (<div key={i} className='mobile-carousel'>
              <h2><span style={{fontSize:"15px",color:"black"}}>{i+1}</span> <span style={{color:'black',opacity:'0.6',paddingRight:"10px",fontSize:"15px"}}>/6</span> {tab}</h2> 
                {/* used conditional rendering when cards less than 4(no need of carousel) */}
              <div className="cards">
              {visibleMobileCards.map((item,index)=>
                <div key={index} className='card'>
                  <img src={item.image}  alt={item.title}/>
                  <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  </div>
                  <div className='btns'>
                    <button>sign up →</button>
                 </div>
              </div>
              )}
               
              </div>
              {hasCarousel && !isSmallMobile &&
              <div className="mobile-arrows">
      <button className='mobile-leftarrow' onClick={()=>{prevMobileSlide(tab)}}><i className="fas fa-chevron-left"></i></button>
       <button className="mobile-rightarrow" onClick={()=>{nextMobileSlide(tab)}}><i className="fa fa-chevron-right"></i></button>
       </div>
       }   
            </div>)}
          )}
          </section>
          
      )
      :
      ( <section>
      <h2 >The <span className='financehighlight'>all-in-one finance platform </span>you've been looking for</h2>
      <p>with Razorpay, you can|</p>
      <ul className="financenav-links">
      {tabs.map((tab,i)=>{
        return (<li key={i}>
            <button className={activeTab===tab?"active":""} onClick={()=>{setActiveTab(tab)
                                    setCurrentIndex(0);
            }}>{tab}</button></li>);
      })}
      </ul>
      {/* jsx for the cards */}
      <div className="platform-box">
      <div className="section-header">
        <h2>{activeTab}</h2>
        {activeTab==="Build AI Native"&&
        <span className="new-badge">NEW</span>}
      </div>
      <div className="carousel-container">
        {/* used conditional rendering when cards less than 4(no need of carousel) */}
      {showCarousel &&
      (<button className='finance-leftarrow' onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>)}
      {/* //displaying cards in each carousel */}
      <div className="cards">
        {visibleCards.map((item,i)=>{
           return (
           <div key={i} className='card'>
                <img src={item.image} alt={item.title}/>
                <div className='card-content'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className='btns'>
                <button>sign up →</button>
                 <button>know more</button>
                 </div>
                 </div>
            </div>
            )
        })}
      </div>
      {/* used conditional rendering when cards less than 4(no need of carousel) */}
      {showCarousel &&
       (<button className="finance-rightarrow" onClick={nextSlide}><i className="fa fa-chevron-right"></i></button>)}
        </div>
        </div>
    </section>)}
     
    </>
  )
}
