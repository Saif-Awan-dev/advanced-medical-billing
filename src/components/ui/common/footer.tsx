import Link from "next/link"
import { ImInstagram } from "react-icons/im"
import { LiaLinkedin } from "react-icons/lia"
import { RiFacebookCircleFill } from "react-icons/ri"
import LogoImg from '../../../../public/assets/images/billingLogo.svg'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-inner border-t">
      <div className="container mx-auto px-4 py-4 pt-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b">
          {/* Logo section */}
          <div className="flex justify-center md:justify-start">
            <div className=" flex items-top gap-2">
              <Image 
                src={LogoImg} 
                alt="Company's Logo" 
                className="w-full"
              />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg border-b border-black/30 pb-2 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/homepage" className="hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link href="/medicalBilling" className="hover:underline transition-all">Medical Billing</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition-all">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition-all">Get Started Today</Link>
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
            <h2 className="font-bold text-lg border-b border-black/30 pb-2 mb-4">About Us</h2>
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
            <h2 className="font-bold text-lg border-b border-black/30 pb-2 mb-4">Mailing Address</h2>
            <div className="space-y-2">
              <p className="flex flex-col">
                <span className="font-semibold">Email:</span>
                <a href="mailto:info@advancedmedicalbilling.org" className="hover:underline">info@advancedmedicalbilling.org</a>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">Address:</span>
                <span>44927 George Washington Blvd, Ashburn, VA 20147</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">Contact Number:</span>
                <a href="tel:307-222-9093" className="hover:underline">978-382-4188</a>
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
              <a href="#" >  
              <RiFacebookCircleFill 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Facebook"
              />
              </a>
              <a href="#" >  
              <ImInstagram 
                className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" 
                aria-label="Instagram"
              />
              </a>
              <a href="#" >  
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