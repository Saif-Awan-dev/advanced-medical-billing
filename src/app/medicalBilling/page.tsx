import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HealthCareRevenue from '../../../public/assets/images/healthCareRevenue.png'
import BillingClaimImg from '../../../public/assets/images/billingClaim.svg'
import EMRImg from '../../../public/assets/images/EMR.svg'
import GrowthImg from '../../../public/assets/images/growth.svg'
import CustomerSupportImg from '../../../public/assets/images/virtualAssistant.svg'
import Image from "next/image"
import Link from "next/link"

const MedicalBilling = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#652be2]">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between mb-16 md:mb-24">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Badge variant="outline" className="mb-4 bg-white text-black hover:bg-black">Medical Billing Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Healthcare Providers with Smarter Revenue Solutions
          </h1>
          <p className="text-lg text-white mb-8">
            At Procure, we provide Medical Billing, Virtual Assistance, and EMR Support tailored for healthcare providers who want to maximize revenue, minimize denials, and simplify operations.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-[#1a365d]">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Card className="w-full p-0 flex items-center justify-center rounded">
            <CardContent className=" flex flex-col items-center justify-center p-0">
              <div className="relative">
                <Image 
                  src={HealthCareRevenue}
                  alt="Healthcare Revenue Solutions" 
                  className="text-gray-500"
                />
              </div>
              {/* <p className="text-gray-500 text-center">Healthcare Revenue Solutions Illustration</p> */}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {`Tailored solutions designed to streamline your practice's operations and maximize revenue`}
          </p>
        </div>

        {/* Medical Billing Service */}
        <Card className="flex flex-col lg:flex-row items-center mb-16 p-6 bg-white">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Card className="flex items-center justify-center p-0 rounded">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="relative">
                  <Image 
                    src={BillingClaimImg}
                    alt="Billing/Claims Illustration" 
                    className="text-gray-500"
                  />
                </div>
                {/* <p className="text-gray-500 text-center">Billing/Claims Illustration</p> */}
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Medical Billing</h3>
            </div>
            <p className="text-black mb-6">
              Medical billing is the backbone of a successful healthcare practice. Our trained billing experts ensure accurate claim submission, denial management, and faster reimbursements—all while staying fully compliant with ICD-10, CPT, HCPCS, and HIPAA standards.
            </p>
            <h4 className="font-semibold text-black mb-4">What We Offer in Medical Billing:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Claim creation and submission",
                "Denial & rejection management",
                "Payment posting and reconciliation",
                "Revenue cycle management (RCM)",
                "Transparent reporting for providers"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-white">
              With us, your collections go up, errors go down, and your practice runs smoothly.
            </p>
          </div>
        </Card>

        {/* Virtual Assistance Service */}
        <Card className="flex flex-col lg:flex-row-reverse items-center mb-16 p-6 bg-white">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
            <Card className=" flex items-center justify-center p-0 rounded">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="relative ">
                  <Image 
                    src={CustomerSupportImg}
                    alt="Virtual Assistant Illustration" 
                    className="text-gray-500"
                  />
                </div>
                {/* <p className="text-gray-500 text-center">Virtual Assistant / Support Illustration</p> */}
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Virtual Assistance</h3>
            </div>
            <p className="text-black mb-6">
              {`Running a practice means juggling patients, paperwork, and calls. Our Virtual Assistants take care of the admin so you don't have to.`}
            </p>
            <h4 className="font-semibold text-black mb-4">Our Virtual Assistants Handle:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Appointment scheduling & reminders",
                "Inbound & outbound patient calls",
                "Insurance verification",
                "Patient follow-ups",
                "Front desk & admin support (HIPAA-compliant)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-black">
              Available 24/7, our VAs reduce your workload, improve patient experience, and lower operating costs.
            </p>
          </div>
        </Card>

        {/* EMR Support Service */}
        <Card className="flex flex-col lg:flex-row items-center p-6 bg-white">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Card className=" flex items-center justify-center p-0 rounded">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <Image 
                    src={EMRImg}
                    alt="EMR Dashboard Illustration" 
                    className="text-gray-500"
                  />
                </div>
                {/* <p className="text-gray-500 text-center">EMR Dashboard Illustration</p> */}
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-black">EMR / EHR Support</h3>
            </div>
            <p className="text-black mb-6">
              Managing EMR can be overwhelming—but not with us on your side. We provide complete EMR support so your system works for you, not against you.
            </p>
            <h4 className="font-semibold text-black mb-4">Our EMR Services Include:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "System setup & integration",
                "Patient data entry & charting",
                "Template customization for faster notes",
                "EMR troubleshooting & staff training",
                "HIPAA-compliant documentation"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-black">
              Save time, reduce errors, and get the most out of your EMR system.
            </p>
          </div>
        </Card>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {`We're committed to delivering exceptional value to healthcare providers`}
          </p>
        </div>
        
        <Card className="flex flex-col lg:flex-row items-center p-6 bg-white">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Card className="p-0 rounded flex items-center justify-center">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <Image 
                    src={GrowthImg} 
                    alt="Growth/Success Illustration"
                    className="text-gray-500"
                  />
                </div>
                {/* <p className="text-gray-500 text-center">Growth/Success Illustration</p> */}
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Expertise & accuracy in billing and compliance",
                "Faster reimbursements with fewer claim denials",
                "HIPAA-compliant Virtual Assistance & EMR support",
                "Cost-effective outsourcing solutions",
                "24/7 availability and support",
                "Scalable services for solo practices, clinics, and hospitals"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <Card className="bg-black rounded-2xl p-8 md:p-12 text-center text-white">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold mb-2 text-white">Get Started Today</CardTitle>
          <CardDescription className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to optimize your practice? Let us handle the Medical Billing, Virtual Assistance, and EMR Support while you focus on patient care.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Card className="bg-white/10 p-4 rounded-lg text-white">
              <CardContent className="p-0">
                <p className="font-semibold">Email Us</p>
                <p>info@advancedmedicalbilling.org</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 p-4 rounded-lg text-white">
              <CardContent className="p-0">
                <p className="font-semibold">Call Us</p>
                <p>978-382-4188</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-white text-[#2c5282] hover:bg-gray-100">
            <Link href="/contact">Contact Us Now →</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalBilling;