import React from 'react'
import '../styles/Registration.css'
import { useState } from 'react'
import Home from '../pages/Homepage'
import { useNavigate } from 'react-router-dom'
import razorpay from '../assets/razorpay.jpg'
import axios from 'axios'

export default function Loginpage() {
     let icon=(<svg aria-hidden="true" data-blade-component="icon" height="16px" viewBox="0 0 24 24" width="16px" fill="none" class="Svgweb__StyledSvg-vcmjs8-0"><path d="M13.0254 23H10.9629V13.8789H13.0254V23ZM10.1211 13.0332H1V10.9707H10.1211V13.0332ZM23.001 13.0332H13.8799V10.9707H23.001V13.0332ZM13.0254 10.1211H10.9629V1H13.0254V10.1211Z" fill="hsla(150, 100%, 23%, 1)" data-blade-component="svg-path"></path></svg>)
    let navigate=useNavigate();
     let [formdata,setFormdata]=useState({
                                            emailOrPhone:"",
                                            country:"India"
        })
        let [errors,setErrors]=useState({})
        let [loginErrors,setLoginErrors]=useState("")
        //for the handle input changes
        let handleChange=(e)=>{
            setFormdata({...formdata,[e.target.name]:e.target.value})
        }
        let handleSubmit=async(e)=>{
            e.preventDefault()
            //validation for the input fields
            let newErrors={};
            if(!formdata.emailOrPhone){
                newErrors.emailOrPhone="email or phonenumber is required";
            }
            else{
                const emailregex=/^\S+@\S+\.\S+$/
                const phoneregex=/^[6-9]\d{9}$/
                if(!emailregex.test(formdata.emailOrPhone) && !phoneregex.test(formdata.emailOrPhone)){
                    newErrors.emailOrPhone="Enter the valid 10-digit number or Email"
                }
            }
            setErrors(newErrors)
            //final validation check
            if(Object.keys(newErrors).length===0){
                // getting data from db.json
               try{
                    let res=await axios.get("http://localhost:3000/users")
                    //checking the user from db
                    const user=res.data.find((u)=>{
                          return  u.emailOrPhone===formdata.emailOrPhone
                    })
                    if(user){
                        setLoginErrors("")
                         alert("login successfull")
                         navigate("/")
                    }
                    else {
                        setLoginErrors("Invalid credentials")//to display directly on webpage
                        // alert("Invalid credentials");
                    }
                }
                catch(err){
                    alert("something went wrong")
                }
            }
        }
  return (
          <div className='reg-container'>
              <div className="reg-left">
                  <div className="razorleft-logo">
                      <img src={razorpay} alt="logo"/>
                      <h3>Razorpay</h3>
                  </div>
                  <div className="regleft-content">
                      <h2>Join 8 Million Businesses that Trust Razorpay to Supercharge their Business</h2>
                      <h3>{icon}100+ Payment Method{icon} Easy Integration{icon} Powerful Dashboard</h3>
                  </div>
              </div>
              <div className="reg-right">
                  <img src={razorpay}/>
                  <h4>Welcome to  Razorpay</h4>
                  <h2>Get started with your email or phone number</h2>
                  <form onSubmit={handleSubmit}>
                      <input type="text"  name="emailOrPhone" placeholder="Enter your email or phone number" value={formdata.emailOrPhone} onChange={handleChange}/>
                      {errors.emailOrPhone && <p style={{color:"red"}}>{errors.emailOrPhone}</p>}
                      {/* //for showing error message if username is wrong */}
                      {loginErrors && <p style={{ color: "red" }}>{loginErrors}</p>}
                      <button type="submit">Continue</button>
                      <div className="divider">
                           <span>or</span>
                      </div>
                      <button type="button">Continue with Google</button>
                      <p>By continuing you agree to our <span> privacy policy</span> and <span> terms of use</span></p>
                  </form>
              </div>
           
          </div>
  )
}
