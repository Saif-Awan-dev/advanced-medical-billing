// import Link from "next/link"
// import { ImInstagram } from "react-icons/im"
// import { LiaLinkedin } from "react-icons/lia"
// import { RiFacebookCircleFill } from "react-icons/ri"
// import LogoImg from '../../../../public/assets/images/logoImg.png'
// import Image from "next/image"

// const Footer = () =>{
//     return(
//     <div className="bg-[#3c65ab] p-4 text-md">
//         <div className="flex place-content-between items-top mx-auto w-[90%] text-white py-10 border-b">
//             <div>
//                 <Image src={LogoImg} alt="Company's Logo" />
//             </div>
//             <div>
//                 <h2 className="font-bold border-b pb-2 mb-2">Quick Links</h2>
//                 <ul>
//                     <li>
//                         <Link href="/homepage">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/medicalBilling">Medical Billng</Link>
//                     </li>
//                     <li>
//                         <Link href="/medicare">Medicare</Link>
//                     </li>
//                     <li>
//                         <Link href="/homepage">Get Started Today</Link>
//                     </li>
//                     <li>
//                         <Link href="/homepage">Careers</Link>
//                     </li>
//                     <li>
//                         <Link href="/homepage">Terms of Use</Link>
//                     </li>
//                     <li>
//                         <Link href="/homepage">Privacy Policy</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <h2 className="font-bold border-b pb-2 mb-2">Mailing Address</h2>
//                 <div>Email: info@procuresolutions.org</div>
//                 <div>Address: 44927 George Washington Blvd, Ashburn, VA 20147</div>
//                 <div>Contact Number : 307-222-9093</div>
//             </div>
//             <div>
//                 <h2 className="font-bold border-b pb-2 mb-2">Social</h2>
//                 <div  className="flex gap-3">
//                     <RiFacebookCircleFill className="cursor-pointer"/>
//                     <ImInstagram className="cursor-pointer"/>
//                     <LiaLinkedin className="cursor-pointer"/>
//                 </div>
//             </div>
//         </div>
//         <div className="text-center text-white pt-2">
//             <p>Copyright © 2025 Procure Healthcare Corporation. All Rights Reserved.</p>
//         </div>
//     </div>    
//     )
// }

// export default Footer

import Link from "next/link"
import { ImInstagram } from "react-icons/im"
import { LiaLinkedin } from "react-icons/lia"
import { RiFacebookCircleFill } from "react-icons/ri"
// import LogoImg from '../../../../public/assets/images/logoImg.png'
import LogoImg from '../../../../public/assets/images/Logo.png'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#731664] text-white">
      <div className="container mx-auto px-4 py-4 pt-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b">
          {/* Logo section */}
          <div className="flex justify-center md:justify-start">
            <div className=" flex items-top gap-2">
              <Image 
                src={LogoImg} 
                alt="Company's Logo" 
                className="w-14 h-14"
              />
              <span className="text-white font-bold mt-4">Procure</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg border-b border-white/30 pb-2 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/homepage" className="hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link href="/medicalBilling" className="hover:underline transition-all">Medical Billing</Link>
              </li>
              <li>
                <Link href="/medicare" className="hover:underline transition-all">Medicare</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition-all">About</Link>
              </li>
              <li>
                <Link href="https://form.typeform.com/to/bC12UNMU?typeform-source=procure.li" className="hover:underline transition-all">Get Started Today</Link>
              </li>
              {/* <li>
                <Link href="/homepage" className="hover:underline transition-all">Careers</Link>
              </li>
              <li>
                <Link href="/tos" className="hover:underline transition-all">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacyPolicy" className="hover:underline transition-all">Privacy Policy</Link>
              </li> */}
            </ul>
          </div>

                    {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg border-b border-white/30 pb-2 mb-4">About Us</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/homepage" className="hover:underline transition-all">Careers</Link>
              </li>
              <li>
                <Link href="/tos" className="hover:underline transition-all">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacyPolicy" className="hover:underline transition-all">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg border-b border-white/30 pb-2 mb-4">Mailing Address</h2>
            <div className="space-y-2">
              <p className="flex flex-col">
                <span className="font-semibold">Email:</span>
                <a href="mailto:info@procuresolutions.org" className="hover:underline">info@procuresolutions.org</a>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">Address:</span>
                <span>44927 George Washington Blvd, Ashburn, VA 20147</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">Contact Number:</span>
                <a href="tel:307-222-9093" className="hover:underline">+1 307-222-9093</a>
              </p>
            </div>
          </div>
          
          {/* Social Media */}
          {/* <div className="text-center md:text-left">
            <h2 className="font-bold text-lg border-b border-white/30 pb-2 mb-4">Social</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61579439590025" >  
              <RiFacebookCircleFill 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Facebook"
              />
              </a>
              <a href="https://www.instagram.com/procuresolutions1/" >  
              <ImInstagram 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Instagram"
              />
              </a>
              <a href="https://www.linkedin.com/in/procure-solutions-799294380/" >  
              <LiaLinkedin 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="LinkedIn"
              />
              </a>
            </div>
          </div> */}
        </div>
        
        {/* Copyright */}
        <div className="pt-4 text-center flex place-content-between">
          <p className="text-sm md:text-base">Copyright © 2025 Procure Healthcare Corporation. All Rights Reserved.</p>
            <div className="">
            {/* <h2 className="font-bold text-lg border-b border-white/30 pb-2 mb-4">Social</h2> */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/profile.php?id=61579439590025" >  
              <RiFacebookCircleFill 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Facebook"
              />
              </a>
              <a href="https://www.instagram.com/procuresolutions1/" >  
              <ImInstagram 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Instagram"
              />
              </a>
              <a href="https://www.linkedin.com/in/procure-solutions-799294380/" >  
              <LiaLinkedin 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="LinkedIn"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer