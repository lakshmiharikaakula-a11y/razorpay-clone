import React from 'react'
import '../styles/DeveloperSection.css'

export default function DeveloperSection({id}) {
    const cardsdata = [
  {
    icon:(<svg style={{width:"40px" ,height:"40px" }} viewBox="0 0 25 28" fill="red">
<path d="M8.13325 15.3333L10.0666 13.4C10.3333 13.1333 10.4613 12.8222 10.4506 12.4666C10.4399 12.1111 10.3119 11.8 10.0666 11.5333C9.79992 11.2666 9.48303 11.1275 9.11592 11.116C8.74881 11.1044 8.43236 11.2324 8.16659 11.5L5.26659 14.4C4.99992 14.6666 4.86659 14.9777 4.86659 15.3333C4.86659 15.6888 4.99992 16 5.26659 16.2666L8.16659 19.1666C8.43325 19.4333 8.75014 19.5613 9.11725 19.5506C9.48436 19.54 9.80081 19.4008 10.0666 19.1333C10.311 18.8666 10.439 18.5555 10.4506 18.2C10.4621 17.8444 10.3341 17.5333 10.0666 17.2666L8.13325 15.3333ZM16.5332 15.3333L14.5999 17.2666C14.3332 17.5333 14.2052 17.8444 14.2159 18.2C14.2266 18.5555 14.3546 18.8666 14.5999 19.1333C14.8666 19.4 15.1835 19.5386 15.5506 19.5493C15.9177 19.56 16.2341 19.4324 16.4999 19.1666L19.3999 16.2666C19.6666 16 19.7999 15.6888 19.7999 15.3333C19.7999 14.9777 19.6666 14.6666 19.3999 14.4L16.4999 11.5C16.2332 11.2333 15.9164 11.1053 15.5492 11.116C15.1821 11.1266 14.8657 11.2657 14.5999 11.5333C14.3555 11.8 14.2279 12.1111 14.2173 12.4666C14.2066 12.8222 14.3341 13.1333 14.5999 13.4L16.5332 15.3333ZM2.99992 27.3333C2.26659 27.3333 1.63859 27.072 1.11592 26.5493C0.593254 26.0266 0.332365 25.3991 0.333254 24.6666V5.99996C0.333254 5.26663 0.594588 4.63863 1.11725 4.11596C1.63992 3.59329 2.26748 3.3324 2.99992 3.33329H8.59992C8.88881 2.53329 9.37236 1.88885 10.0506 1.39996C10.7288 0.91107 11.4897 0.666626 12.3333 0.666626C13.1777 0.666626 13.939 0.91107 14.6173 1.39996C15.2955 1.88885 15.7786 2.53329 16.0666 3.33329H21.6666C22.3999 3.33329 23.0279 3.59463 23.5506 4.11729C24.0732 4.63996 24.3341 5.26751 24.3332 5.99996V24.6666C24.3332 25.4 24.0719 26.028 23.5492 26.5506C23.0266 27.0733 22.399 27.3342 21.6666 27.3333H2.99992ZM2.99992 24.6666H21.6666V5.99996H2.99992V24.6666ZM12.3333 4.99996C12.6221 4.99996 12.8608 4.90529 13.0492 4.71596C13.2377 4.52663 13.3324 4.28796 13.3333 3.99996C13.3333 3.71107 13.2386 3.4724 13.0492 3.28396C12.8599 3.09551 12.6213 3.00085 12.3333 2.99996C12.0444 2.99996 11.8057 3.09463 11.6173 3.28396C11.4288 3.47329 11.3341 3.71196 11.3333 3.99996C11.3333 4.28885 11.4279 4.52751 11.6173 4.71596C11.8066 4.9044 12.0453 4.99907 12.3333 4.99996Z" fill="white"></path>
</svg>),
    title:"Integrations",
    desc:"Find all popular platform SDKs..."
  },
  {
    icon: (
      <svg style={{
        width:"40px",
        height:"40px"}}
        viewBox="0 0 25 23"
        fill="none"
      >
        <path
          d="M 2.835 13.147 C 2.048 13.639 1.404 14.329 0.966 15.147 C 0.527 15.965 0.31 16.883 0.335 17.811 C 0.36 18.738 0.627 19.643 1.109 20.436 C 1.591 21.229 2.272 21.883 3.084 22.332 C 3.895 22.782 4.811 23.011 5.739 22.999 C 6.666 22.986 7.575 22.732 8.374 22.261 C 9.174 21.79 9.837 21.118 10.297 20.312 C 10.757 19.507 11 18.595 11 17.667 L 19 17.667 M 16.421 22.336 C 17.134 22.729 17.927 22.954 18.739 22.994 C 19.552 23.033 20.363 22.886 21.11 22.564 C 21.857 22.242 22.521 21.753 23.05 21.135 C 23.579 20.517 23.96 19.786 24.163 18.998 C 24.366 18.21 24.386 17.386 24.222 16.589 C 24.057 15.792 23.713 15.044 23.215 14.4 C 22.716 13.757 22.078 13.237 21.347 12.878 C 20.616 12.52 19.814 12.334 19 12.333 C 18.059 12.333 17.101 12.572 16.333 13 L 12.333 5.667 M 17.667 5.667 C 17.667 4.252 17.105 2.896 16.104 1.895 C 15.104 0.895 13.748 0.333 12.333 0.333 C 10.919 0.333 9.562 0.895 8.562 1.895 C 7.562 2.896 7 4.252 7 5.667 C 7 7.675 8.027 9.424 9.667 10.333 L 5.667 17.667"
          fill="transparent"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title:"API Reference",
    desc:"Comprehensive documentation..."
  },
  {
    icon:(<svg style={{width:"40px" ,height:"40px"}} viewBox="-1 -1 29 30" fill="none" >
    <path fillRule="evenodd" clipRule="evenodd" d="M26.2761 1.05715C26.7968 1.57785 26.7968 2.42207 26.2761 2.94277L23.7906 5.42832C24.74 6.87844 24.8996 8.46316 24.6933 9.8247C24.447 11.4504 23.665 12.8873 22.9428 13.6094L20.9428 15.6094C20.4221 16.1301 19.5779 16.1301 19.0572 15.6094L11.7239 8.2761C11.2032 7.7554 11.2032 6.91118 11.7239 6.39048L13.7239 4.39048C14.446 3.66833 15.8829 2.88633 17.5086 2.64001C18.8701 2.43371 20.4549 2.5933 21.905 3.5427L24.3905 1.05715C24.9112 0.536451 25.7554 0.536451 26.2761 1.05715ZM17.9081 5.27658C16.7838 5.44692 15.8873 5.99826 15.6095 6.2761L14.5523 7.33329L20 12.781L21.0572 11.7238C21.335 11.446 21.8864 10.5495 22.0567 9.42522C22.2165 8.37083 22.027 7.24592 21.0572 6.2761C20.0874 5.30628 18.9625 5.11682 17.9081 5.27658ZM11.6095 11.0572C12.1302 11.5778 12.1302 12.4221 11.6095 12.9428L9.88562 14.6666L12.6667 17.4477L14.3905 15.7238C14.9112 15.2031 15.7554 15.2031 16.2761 15.7238C16.7968 16.2445 16.7968 17.0887 16.2761 17.6094L14.5523 19.3333L14.9428 19.7238C15.4635 20.2445 15.4635 21.0887 14.9428 21.6094L12.9428 23.6094C12.2207 24.3316 10.7838 25.1136 9.15807 25.3599C7.79654 25.5662 6.21182 25.4066 4.7617 24.4572L2.27614 26.9428C1.75544 27.4635 0.911223 27.4635 0.390524 26.9428C-0.130175 26.4221 -0.130175 25.5779 0.390524 25.0571L2.87608 22.5716C1.92667 21.1215 1.76709 19.5368 1.97338 18.1752C2.2197 16.5495 3.0017 15.1126 3.72386 14.3905L5.72386 12.3905C6.24456 11.8698 7.08878 11.8698 7.60948 12.3905L8 12.781L9.72386 11.0572C10.2446 10.5365 11.0888 10.5365 11.6095 11.0572ZM6.66667 15.2189L5.60948 16.2761C5.33163 16.5539 4.7803 17.4504 4.60995 18.5747C4.4502 19.6291 4.63965 20.754 5.60948 21.7238C6.5793 22.6936 7.70421 22.8831 8.75859 22.7233C9.88286 22.553 10.7793 22.0017 11.0572 21.7238L12.1144 20.6666L6.66667 15.2189Z" fill="white"></path>
    </svg>),
    title:"Webhooks",
    desc:"Receive real-time notifications..."
  }
];
  return (
    <div>
   
    <section id={id} className='developer-section'>
    <div className="marquee">
        <div className="track">
         <span>PHP</span>
    <span>•</span>
    <span>NODE JS</span>
    <span>•</span>
    <span>CURL</span>
    <span>•</span>
    <span>JAVA</span>
    <span>•</span>
    <span>PYTHON</span>
    <span>•</span>
    <span>PHP</span>
    <span>•</span>
    <span>NODE JS</span>
    <span>•</span>
    <span>CURL</span>

    {/* Duplicate */}
    <span>•</span>
    <span>PHP</span>
    <span>•</span>
    <span>NODE JS</span>
    <span>•</span>
    <span>CURL</span>
    <span>•</span>
    <span>JAVA</span>
    <span>•</span>
    <span>PYTHON</span>
    <span>•</span>
    <span>PHP</span>
    <span>•</span>
    <span>NODE JS</span>
    <span>•</span>
    <span>CURL</span>
         </div>
    </div>
        <div className="developer-heading">
            <h1>Razorpay is built</h1>
            <h1>&lt;for developers by developers&gt;</h1>
        </div>
         <div className="dev-cards">
            {/* cards */}
            {cardsdata.map((devcard)=>{
                return (
                    <div className="devcard" key={devcard.title}>
                    <div className='devcard-icon' >
                            {devcard.icon} 
                    </div>
                    <h1>{devcard.title}</h1>
                    <p>{devcard.desc}</p>
                    <a href="#">View Docs →</a>
                    </div>
                )
            })}
        </div>
        <div className="playground">
             <div className="left">
                Try it out for yourself
            </div>
            <div className="right">
                <div className="code-editor">
                    <div className="editor-header">
                          <div className="language-tab">
                            <span className="active">Curl</span>
                            <span>change language</span>
                          </div>
                          <div className="code-header-icons">
                            <i className="fa-regular fa-copy"></i>
                            <i className="fa-solid fa-xmark"></i>
                            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                          </div>
                    </div>
                    <div className="code-content">
                         <div className="line">
                            <span className="line-no">1</span>
                            <span>curl -X POST https://api.razorpay.com/v1/orders</span>
                         </div>
                         <div className="line">
                            <span className="line-no">2</span>
                            <span>-u [YOUR_KEY_ID]:[YOUR_KEY_SECRET]</span>
                         </div>
                         <div className="line">
                            <span className="line-no">3</span>
                            <span className="green">
                                -H 'content-type:application/json'
                            </span>
                         </div>
                         <div className="line">
                            <span className="line-no">4</span>
                            <span>-d '{`{`}</span>
                         </div>
                         <div className="line">
                                <span className="line-no">5</span>
                                <span className="yellow">"amount": 500,</span>
                         </div>
                         <div className="line">
                             <span className="line-no">6</span>
                             <span className="yellow">"currency": "INR",</span>
                        </div>
                          <div className="line">
                            <span className="line-no">7</span>
                            <span className="yellow">"receipt": "qwsaq1",</span>
                        </div>
                          <div className="line">
                            <span className="line-no">8</span>
                            <span className="yellow">"partial_payment": true,</span>
                        </div>

                        <div className="line">
                            <span className="line-no">9</span>
                            <span className="yellow">
                                "first_payment_min_amount": 230
                            </span>
                        </div>
                        <div className="line">
                            <span className="line-no">10</span>
                            <span>{`}`}'</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
