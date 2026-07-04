import React from 'react'
import razorpay from '../assets/razorpay.jpg'
import soclogo from '../assets/soclog.avif'
import qrclogo from '../assets/qrclogo.png'
import pcilogo from '../assets/pcilogo.avif'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-content">
                    <div className="razor-logo">
                    <img src={razorpay} alt="logo"/>
                    <h2>razorpay</h2>
                    </div>
                    <div className='content'>
                    <p>Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p>
                    <p>RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p>
                    <p>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p>
                    <p>Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>
                    </div>
                    <div className="footer-logos">
                        <img src={soclogo} alt="SOC Logo"/>
                        <img src={qrclogo} alt="QRC Logo"/>
                        <img src={pcilogo} alt="PCI Logo"/>
                    </div>
            </div>
            <div className="footer-links">
                <div className="column">
                    <h3>ACCEPT PAYMENTS</h3>
                    <a href="#">Payment Aggregator</a>
                    <a href="#">Payment Gateway</a>
                    <a href="#">Payment Pages</a>
                    <a href="#">Payment Links</a>
                    <a href="#">Razorpay POS</a>
                    <a href="#">QR Codes</a>
                    <a href="#">Subscriptions</a>
                    <a href="#">Smart Collect</a>
                    <a href="#">Optimizer</a>
                    <a href="#">Instant Settlements</a>
                    <h3>PAYROLL</h3>
                    <a href="#">RazorpayX Payroll</a>
                    <h3>BECOME A PARTNER</h3>
                    <a href="#">Refer and Earn</a>
                    <a href="#">Onboarding APIs</a>
                    <h3>MORE</h3>
                    <a href="#">Route</a>
                    <a href="#">Invoices</a>
                    <a href="#">Freelancer Payments</a>
                    <a href="#">International Payments</a>
                    <a href="#">Flash Checkout</a>
                    <a href="#">UPI</a>
                    <a href="#">ePOS</a>
                    <a href="#">Checkout Demo</a>
                </div>
                <div className="column">
                    <h3>BANKING PLUS</h3>
                    <a href="#">RazorpayX</a>
                    <a href="#">Source to pay</a>
                    <a href="#">Current Accounts</a>
                    <a href="#">Payouts</a>
                    <a href="#">Payout Links</a>
                    <a href="#">Corporate Credit Card</a>
                    <h3>DEVELOPERS</h3>
                    <a href="#">Docs</a>
                    <a href="#">Integrations</a>
                    <a href="#">API Reference</a>
                    <h3>RESOURCES</h3>
                    <a href="#">Blog</a>
                    <a href="#">Learn</a>
                    <a href="#">Customer Stories</a>
                    <a href="#">Events</a>
                    <a href="#">Chargeback Guide</a>
                    <a href="#">Settlement Guide</a>
                    <h3>SOLUTIONS</h3>
                    <a href="#">Education</a>
                    <a href="#">E-commerce</a>
                    <a href="#">SaaS</a>
                    <a href="#">BFSI</a>
                    <h3>FREE TOOLS</h3>
                    <a href="#">GST Calculator</a>
                    <a href="#">GST Number Search</a>
                    <a href="#">GST Search by PAN</a>
                    <a href="#">ROI Calculator</a>
                    <a href="#">CAGR Calculator</a>
                    <a href="#">EBITDA Calculator</a>
                </div>
                <div className="column">
                   <h3>COMPANY</h3> 
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Website Terms </a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Grievance Redressal</a>
                    <a href="#">Responsible Disclosure</a>
                    <a href="#">Partners</a>
                    <a href="#">White papers</a>
                    <a href="#">Corporate Information</a>
                    <h3> HELP & SUPPORT</h3>
                    <a href="#">Support</a>
                    <a href="#">Knowledge base</a>
                    <h3>FIND US ONLINE</h3> 
                    <h3>REGD. OFFICE ADDRESS</h3> 
                    <p>Razorpay Software Limited,
                    1st Floor, SJR Cyber,
                    22 Laskar Hosur Road, Adugodi,
                    Bengaluru, 560030,
                    Karnataka, India
                    CIN: U62099KA2024PTC188982</p>
                    <p>© Razorpay 2025
                    All Rights Reserved</p>
                    <p>Razorpay Payments Private
                    Limited is an RBI Authorised Payment Aggregator</p>
                </div>
            </div>
        </div>
      
    </footer>
  )
}
