import ecommerce from '../assets/Industry/e-commerce.avif'
import bfsi from '../assets/Industry/bfsi.avif'
import education from '../assets/Industry/education.avif'
import saas from '../assets/Industry/saas.avif'
import freelancer from '../assets/Industry/freelancer.avif'
export const industryData = {
  "E-Commerce": {
    title: "Payments for your ecommerce business.",
    description:
      "Accept payments from customers and manage settlements seamlessly.",
    image:ecommerce,
    companies: ["Flipkart", "Amazon", "Myntra"]
  },

  "Education": {
    title: "Payments for your education business.",
    description:
      "Effortlessly establish and monitor fee payments and vendor payouts for educational institutions.",
    image:education,
    companies: ["Unacademy", "NIIT", "Toppr", "Great Learning"]
  },

  "BFSI": {
    title: "Payments for your BFSI business.",
    description:
      "Simplify banking, financial services, and insurance transactions with secure payment solutions.",
    image:bfsi,
    companies: ["HDFC", "ICICI", "Axis Bank", "Kotak"]
  },

  "SaaS": {
    title: "Payments for your SaaS business.",
    description:
      "Automate subscription billing and recurring payments for your SaaS products.",
    image:saas,
    companies: ["Slack", "Zoom", "Notion"]
  },

  "Freelancer": {
    title: "Payments for freelancers.",
    description:
      "Receive international and domestic payments effortlessly.",
    image:freelancer,
    companies: ["Upwork", "Fiverr", "Freelancer"]
  }
};