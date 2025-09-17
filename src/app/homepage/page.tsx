"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useRef } from "react"
import InfoContainer from "@/components/ui/common/infoContainer"
import TestimonialCarousel from "@/components/ui/common/testimonialCard"
import MedicalBillingImg from "../../../public/assets/images/billingClaim.svg"
import SolarImage from '../../../public/assets/images/solar.jpg'
import HomeImpImage from '../../../public/assets/images/homeimprovement.jpg'
import AutoInsuImage from '../../../public/assets/images/autoinsurance.webp'
import FinalExpImage from '../../../public/assets/images/finalExpense.jpg'
import MobileBannerFirst from '../../../public/assets/images/mobileBanner1.png'
import MobileBannerSecond from '../../../public/assets/images/mobileBanner2.png'
import MobileBannerThird from '../../../public/assets/images/mobileBanner3.png'
import MobileBannerFourth from '../../../public/assets/images/mobileBanner4.png'
import BillingBannerOne from '../../../public/assets/images/billingBanner1.png'
import BillingBannerTwo from '../../../public/assets/images/billingBanner2.png'
import BillingBannerThree from '../../../public/assets/images/billingBanner3.png'
import BillingBannerFour from '../../../public/assets/images/billingBanner4.png'

import Link from "next/link"

const banners = [BillingBannerOne, BillingBannerTwo, BillingBannerThree, BillingBannerFour]
const mobileBanners = [MobileBannerFirst,MobileBannerSecond, MobileBannerThird, MobileBannerFourth]

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
    <div className="min-h-screen bg-[#652be2]">
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
      <section className="py-16  bg-[#652be2]">
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
            {/* <InfoContainer
              title="MEDICARE"
              text="We specialize in connecting Medicare agencies with qualified prospects through trusted call center solutions. By ensuring TCPA compliance and supporting insurance agents with seamless customer engagement, we help grow enrollments, boost revenue, and build lasting trust."
              link="medicare"
              imageUrl={MedicareImg}
            /> */}
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
      <section className="py-16 bg-[#652be2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-800 text-base px-3 py-1">
              Client Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-white">
              Discover why healthcare providers choose Advanced Medical Billing for their practice management needs.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#652be2]">
        <div className="container mx-auto px-4">
          <Card className="bg-black rounded-2xl p-8 md:p-12 text-center text-white border-none shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who trust Advanced Medical Billing with their medical billing and practice management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold">
                  <Link href="/contact">Get Started</Link>
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