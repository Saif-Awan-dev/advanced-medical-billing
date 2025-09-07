// "use client"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import Image from "next/image"
// import FirstBanner from "../../../public/assets/images/banner1.png"
// import SecondBanner from "../../../public/assets/images/banner1.png"
// import ThirdBanner from "../../../public/assets/images/banner1.png"
// import { useEffect, useRef, useState } from "react"
// import InfoContainer from "@/components/ui/common/infoContainer"
// import TestimonialCarousel from "@/components/ui/common/testimonialCard"
// import MedicalBillingImg from "../../../public/assets/images/medicalBillingImg.jpg"
// import MedicareImg from '../../../public/assets/images/medicare.webp'
// import VirtualAssistanImg from '../../../public/assets/images/virtualAssistantImg.jpg'
// import EMRImg from '../../../public/assets/images/EMR.jpg'

// const banners = [FirstBanner, SecondBanner, ThirdBanner]
// const Homepage = () => {
//   const nextRef = useRef<HTMLButtonElement>(null)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (nextRef.current) {
//         nextRef.current.click()
//       }
//     }, 3000) // change slide every 3 seconds

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       <div className="h-full overflow-hidden">
//         <Carousel>
//           <CarouselContent>
//             {banners.map((banner, idx) => (
//               <CarouselItem key={idx}>
//                 <Image src={banner} alt={`Banner_${idx + 1}`} />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext ref={nextRef} />
//         </Carousel>
//       </div>
//       <div className="mt-10">
//         <div className="text-center text-4xl font-bold arial underline text-[#3c65ab] bg-[#3c65ab] p-2">
//           <h1 className="text-white">What We Offer</h1>
//         </div>
//         <div>
//           <InfoContainer
//             title="MEDICAL BILLING"
//             text=" We deliver end-to-end medical billing solutions, seamless EMR support, and dedicated virtual assistance — ensuring accuracy, compliance, and faster reimbursements. From managing claims to simplifying operations."
//             link="medicalBilling"
//             imageUrl={MedicalBillingImg}
//           />
//           <InfoContainer
//             title="MEDICARE"
//             text="We specialize in connecting Medicare agencies with qualified prospects through trusted call center solutions. By ensuring TCPA compliance and supporting insurance agents with seamless customer engagement, we help grow enrollments, boost revenue, and build lasting trust."
//             link="medicare"
//             imageUrl={MedicareImg}
//           />
//         </div>
//         <div className="flex gap-2 m-10">
//           <InfoContainer
//             title="EMR"
//             text="Managing EMR can be overwhelming—but not with us on your side. We provide complete EMR support so your system works for you, not against you."
//             link="medicalBilling"
//             imageUrl={EMRImg}
//           />
//           <InfoContainer
//             title="VIRTUAL ASSISTANT"
//             text="Running a practice means juggling patients, paperwork, and calls. Our Virtual Assistants take care of the admin so you don’t have to."
//             link="medicalBilling"
//             imageUrl={VirtualAssistanImg}
//           />
//         </div>
//       </div>
//       <TestimonialCarousel />
//     </>
//   )
// }

// export default Homepage

"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useRef } from "react"
import InfoContainer from "@/components/ui/common/infoContainer"
import TestimonialCarousel from "@/components/ui/common/testimonialCard"
import MedicalBillingImg from "../../../public/assets/images/medicalBillingImg.jpg"
import MedicareImg from '../../../public/assets/images/medicare.webp'
import VirtualAssistanImg from '../../../public/assets/images/virtualAssistantImg.jpg'
import EMRImg from '../../../public/assets/images/EMR.jpg'
import MedicareBanner from '../../../public/assets/images/banner1.png'
import SecondBanner from '../../../public/assets/images/banner2.png'
import ThirdBanner from '../../../public/assets/images/banner3.png'
import FourthBanner from '../../../public/assets/images/banner4.png'
import FifthBanner from '../../../public/assets/images/banner5.png'
import SixthBanner from '../../../public/assets/images/banner6.png'
import SolarImage from '../../../public/assets/images/solar.jpg'
import HomeImpImage from '../../../public/assets/images/homeimprovement.jpg'
import AutoInsuImage from '../../../public/assets/images/autoinsurance.webp'
import FinalExpImage from '../../../public/assets/images/finalExpense.jpg'
import MobileBannerFirst from '../../../public/assets/images/mblBanner1.png'
import MobileBannerSecond from '../../../public/assets/images/mblBanner2.png'
import MobileBannerThird from '../../../public/assets/images/mblBanner3.png'
import MobileBannerFourth from '../../../public/assets/images/mblBanner4.png'
import MobileBannerFifth from '../../../public/assets/images/mblBanner5.png'
import MobileBannerSix from '../../../public/assets/images/mblBanner6.png'

import Link from "next/link"

const banners = [MedicareBanner, SecondBanner, ThirdBanner, FourthBanner, FifthBanner, SixthBanner]
const mobileBanners = [MobileBannerFirst,MobileBannerSecond, MobileBannerThird, MobileBannerFourth, MobileBannerFifth, MobileBannerSix]

const Homepage = () => {
  const nextRef = useRef<HTMLButtonElement>(null)
  const mobileRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextRef.current) { 
        nextRef.current.click()
      }
      if (mobileRef.current) { 
        mobileRef.current.click()
      }
    }, 3000) // change slide every 3 second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f1a10d]">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden">
        <Carousel className="hidden lg:block md:block" opts={{ loop: true }}>
          <CarouselContent>
            {banners?.map((banner, idx) => (
              <CarouselItem key={idx} >
                <div className="relative w-full h-[40vh] md:h-[65vh] lg:h-[70vh]">
                  <Image
                    src={banner}
                    alt={`Banner_${idx + 1}`}
                    priority={idx === 0}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 z-10" />
          <CarouselNext ref={nextRef} className="right-2 sm:right-4 z-10" />
        </Carousel>
        <Carousel className="block px-1 lg:hidden md:hidden" opts={{ loop: true }}>
          <CarouselContent>
            {mobileBanners?.map((banner, idx) => (
              <CarouselItem key={idx} >
                <div className="relative w-full">
                  <Image
                    src={banner}
                    alt={`Banner_${idx + 1}`}
                    priority={idx === 0}
                    width={1000}
                    height={1000}
                    className="object-cover w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 z-10" />
          <CarouselNext ref={mobileRef} className="right-2 sm:right-4 z-10" />
        </Carousel>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-[#f1a10d]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 text-base px-3 py-1">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-white">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-white">
              We provide end-to-end services designed to streamline your practice, maximize revenue, and enhance patient care.
            </p>
          </div>

          {/* Main Services */}
          <div className="space-y-12">
            <InfoContainer
              title="MEDICAL BILLING"
              text="We deliver end-to-end medical billing solutions, seamless EMR support, and dedicated virtual assistance — ensuring accuracy, compliance, and faster reimbursements. From managing claims to simplifying operations."
              link="medicalBilling"
              imageUrl={MedicalBillingImg}
            />
            <InfoContainer
              title="MEDICARE"
              text="We specialize in connecting Medicare agencies with qualified prospects through trusted call center solutions. By ensuring TCPA compliance and supporting insurance agents with seamless customer engagement, we help grow enrollments, boost revenue, and build lasting trust."
              link="medicare"
              imageUrl={MedicareImg}
            />
          </div>

          {/* Supporting Services Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">
              Additional Support Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#731664]">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={AutoInsuImage}
                      alt="EMR Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <Badge className="mb-2 bg-purple-100 text-purple-800">Technology</Badge>
                    <h4 className="font-bold text-white text-lg mb-2">Auto Insurance</h4>
                    <p className="text-white">
                      We care for our clients beyond just providing coverage. With reliable support and guidance whenever you need it most, we’re more than a call centre — we’re your trusted insurance partner.
                    </p>
                    {/* <Button variant="link" className="px-0 mt-3 text-blue-600">
                      Learn more →
                    </Button> */}
                  </CardContent>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#731664]">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={SolarImage}
                      alt="Virtual Assistant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <Badge className="mb-2 bg-green-100 text-green-800">Efficiency</Badge>
                    <h4 className="font-bold text-white text-lg mb-2"> Solar</h4>
                    <p className="text-white">
                      {`We go beyond cold calls — we create real opportunities for your solar business.
With seamless telemarketing support and qualified lead generation,
we’re more than a call centre — we’re your trusted extension in solar.`}
                    </p>
                    {/* <Button variant="link" className="px-0 mt-3 text-blue-600">
                      Learn more →
                    </Button> */}
                  </CardContent>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#731664]">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-76 md:h-auto">
                    <Image
                      src={FinalExpImage}
                      alt="EMR Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <Badge className="mb-2 bg-purple-100 text-purple-800">Technology</Badge>
                    <h4 className="font-bold text-white text-lg mb-2">Final Expense</h4>
                    <p className="text-white">
                      {`We deliver more than leads — we deliver ready-to-talk Final Expense prospects.
With proven telemarketing strategies and seamless client connections,
we help your agency close more sales and grow with confidence.`}
                    </p>
                    {/* <Button variant="link" className="px-0 mt-3 text-blue-600">
                      Learn more →
                    </Button> */}
                  </CardContent>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#731664]">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={HomeImpImage}
                      alt="Virtual Assistant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <Badge className="mb-2 bg-green-100 text-green-800">Efficiency</Badge>
                    <h4 className="font-bold text-white text-lg mb-2">Home Improvement</h4>
                    <p className="text-white">
                      {`We deliver more than leads — we connect you with homeowners ready for their next project.
                        With proven telemarketing strategies and seamless appointment setting,
                        we help your business win more jobs and grow with confidence.`}
                    </p>
                    {/* <Button variant="link" className="px-0 mt-3 text-blue-600">
                      Learn more →
                    </Button> */}
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-sm uppercase tracking-wider">Claim Accuracy Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-sm uppercase tracking-wider">Providers Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">$250M+</p>
              <p className="text-sm uppercase tracking-wider">Revenue Processed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm uppercase tracking-wider">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f1a10d]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-800 text-base px-3 py-1">
              Client Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-white">
              Discover why healthcare providers choose Procure for their practice management needs.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f1a10d]">
        <div className="container mx-auto px-4">
          <Card className="bg-black rounded-2xl p-8 md:p-12 text-center text-white border-none shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who trust Procure with their medical billing and practice management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Link href="https://form.typeform.com/to/bC12UNMU?typeform-source=procure.li">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Homepage