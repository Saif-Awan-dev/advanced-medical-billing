// import Link from "next/link"
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../navigation-menu"
// import { ThemeToggle } from "../../../app/theme-toggle"
// import Image from "next/image"
// import LogoImg from '../../../../public/assets/images/logoImg.png'
// import { BsTelephone } from "react-icons/bs"

// export default function Navbar() {
//   return (
//     <div className="flex items-center place-content-between p-4 dark:bg-white dark:text-black">
//       <div className="font-bold font-weight-800 font-poppins">
//         <Image src={LogoImg} alt="Company's Logo" />
//       </div>
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/homepage">Home</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/medicare">Medicare</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/medicalBilling">Medical Billing</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/about">About Us</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuLink asChild>
//               <Link href="/about-us">Get Started Today</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//       <div className="flex items-center gap-2">
//         <div className="flex items-center gap-1">
//           <BsTelephone />
//           307-222-9093  
//         </div>
//         <ThemeToggle />  
//       </div>
//     </div>
//   )
// }
"use client"
import { useState, useEffect } from 'react';
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../navigation-menu"
import { ThemeToggle } from "../../../app/theme-toggle"
import Image from "next/image"
import DarkLogoImage from '../../../../public/assets/images/darkLogoImg.png'
import LightLogoImage from '../../../../public/assets/images/lightLogoImg.png'
import LogoImage from '../../../../public/assets/images/Logo.png'
import { BsTelephone, BsXLg, BsList, BsTelephoneFill, BsTelephoneXFill, BsTelephoneForward } from "react-icons/bs"
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import PhoneIcon from '../../../../public/assets/images/phoneIcon.webp'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {theme } = useTheme()
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]); 

  console.log('theme',theme)
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [isScrolled]); // You might want to add a router dependency if using Next.js router

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-black-500 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-black dark:bg-black'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0 w-10">
            {/* {theme === 'dark' ?
            <Image 
              // src={`${theme === 'dark' ? DarkLogoImage : LightLogoImage}`} 
              src={LightLogoImage} 
              alt="Company's Logo" 
              width={160} 
              height={60}
              className="w-32 md:w-40"
            />: */}
            <Link href="/homepage" className='flex items-center gap-3'>
            <Image 
              // src={`${theme === 'dark' ? DarkLogoImage : LightLogoImage}`} 
              src={LogoImage} 
              alt="Company's Logo" 
              width={60} 
              height={10}
              className="w-14 md:w-40"
            />
            <span className='text-white font-bold'>Procure</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/homepage" className="px-3 py-2 text-sm font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/medicare" className="px-3 py-2 text-sm font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Medicare</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/medicalBilling" className="px-3 py-2 text-sm font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Medical Billing</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="px-3 py-2 text-sm font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="https://form.typeform.com/to/bC12UNMU?typeform-source=procure.li" className="px-3 py-2 text-sm font-medium  text-white transition-colors rounded-md ml-2">Get Started Today</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1  text-black bg-[#f1a10d] dark:text-gray-300 pr-3 py-1 rounded text-lg rounded-l-4xl">
              {/* <BsTelephone className="text-blue-600 " /> */}
              <Image src={PhoneIcon} alt="Phone Icon" width={40} height={50} className="mr-1 text-black" />
               307-222-9093
            </div>
            
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <BsXLg size={20} /> : <BsList size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-3 pb-4 border-t dark:border-gray-700 mt-3 pt-4">
            <Link href="/homepage" className="px-3 py-2 text-base font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Home</Link>
            <Link href="/medicare" className="px-3 py-2 text-base font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Medicare</Link>
            <Link href="/medicalBilling" className="px-3 py-2 text-base font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">Medical Billing</Link>
            <Link href="/about" className="px-3 py-2 text-base font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md">About Us</Link>
            <Link href="https://form.typeform.com/to/bC12UNMU?typeform-source=procure.li" className="px-3 py-2 text-base font-medium text-center bg-[#731644] text-white hover:bg-blue-700 transition-colors rounded-md mt-2">Get Started Today</Link>
            
            <div className="flex items-center justify-center gap-1 text-white dark:text-gray-300 pt-2">
              <BsTelephone className="text-blue-600" />
              307-222-9093
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}