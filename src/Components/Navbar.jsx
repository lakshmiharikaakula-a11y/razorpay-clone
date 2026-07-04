import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom'
import razorpay from '../assets/razorpay.jpg'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const navigate=useNavigate()
  let [hamburger,sethamburger]=useState(false);
  let [agenticdropdown,setagenticdropdown]=useState(false);
   let [paymentsdropdown,setpaymentsdropdown]=useState(false);
   let [bankingdropdown,setbankingdropdown]=useState(false);
   let [payrolldropdown,setpayrolldropdown]=useState(false);
  return (
    <>
      <nav>
        <div className="logo">
        <img src={razorpay} alt="logo"/>
        <h1>Razorpay</h1>
        </div>
        <ul className={`nav-links ${hamburger? "open":""}`}>
            <li className="drop-down"><a href="#" onClick={()=>{setagenticdropdown(!agenticdropdown)}}>Agentic Stack
              {agenticdropdown?(<i className="fa-solid fa-caret-down"></i>):(<i className="fa-solid fa-caret-up"></i>)}  
            </a>
            {agenticdropdown && (<ul className="dropdown-menu">
              <li><a href="#">Agentic studio</a></li>
              <li><a href="#">Agentic payments</a></li>
              <li><a href="#">Agentic Business Making</a></li>
            </ul>)}
            </li>
            <li className="drop-down"><a href="#" onClick={()=>{setpaymentsdropdown(!paymentsdropdown)}}>Payments
              {paymentsdropdown?(<i className="fa-solid fa-caret-down"></i>):(<i className="fa-solid fa-caret-up"></i>)}
            </a>
                {paymentsdropdown && (<ul className='dropdown-menu'>
                  <li onClick={()=>{navigate("/payments");sethamburger(false)}}><a href="#" >payment gateway</a></li>
                  <li onClick={()=>{sethamburger(false)}}><Link to="/payments#upi" >payment links</Link></li>
                  <li><a href="#">payment aggregator</a></li>
                  <li><a href="#">QR codes</a></li>
                  <li><a href="#">UPI payments</a></li>
                </ul>)}
            </li>
            <li className='drop-down'><a href="#" onClick={()=>{setbankingdropdown(!bankingdropdown)}}>Banking+
              {bankingdropdown?(<i className="fa-solid fa-caret-down"></i>):(<i className="fa-solid fa-caret-up"></i>)}
            </a>
                  {bankingdropdown &&(<ul className="dropdown-menu">
                    <li><a href="#">vendor payments</a></li>
                    <li><a href="#">payouts</a></li>
                    <li><a href="#">corporate cards</a></li>
                  </ul>)}
            </li>
            <li><a href="#" onClick={()=>{setpayrolldropdown(!payrolldropdown)}}>Payroll
              {payrolldropdown?(<i className="fa-solid fa-caret-down"></i>):(<i className="fa-solid fa-caret-up"></i>)}
            </a>
             {payrolldropdown && (<ul className="dropdown-menu">
                <li><a href="#">payroll</a></li>
                <li><a href="#">For Start ups&SMEs</a></li>
                <li><a href="#">For Enterprises</a></li>
              </ul>)}
            </li>
            <li><a href="#">Engage</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
        <div className="buttons">
            <button onClick={()=>{navigate("/login")}}>Login</button>
             <button onClick={()=>{navigate("/register")}}>Sign up</button>
        </div>
        {/* hamburger menu */}
        <div className="hamburger-menu" onClick={()=>{sethamburger(!hamburger)}}>
            {/* conditinal rendering for close and hamburger menus */}
          {hamburger?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}
        </div>
      </nav>
    </>
  )
}














