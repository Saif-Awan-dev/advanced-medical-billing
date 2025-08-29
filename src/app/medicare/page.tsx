import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HandShakeImg from '../../../public/assets/images/handshake.png'
import GrowthChartImg from '../../../public/assets/images/growth.png'
import CustomerSupportImg from '../../../public/assets/images/customerSupport.png'
import Image from "next/image";
import Link from "next/link"

const Medicare = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f1a10d]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Badge className="mb-4 bg-[#731644] text-white hover:bg-black">Medicare Solutions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partnering for Growth, Compliance, and Quality
          </h1>
          <p className="text-lg text-white mb-6">
            At Procure, we specialize in connecting licensed agents and insurance agencies with qualified Medicare customers—helping you grow your book of business while ensuring compliance, efficiency, and results.
          </p>
          <p className="text-white mb-8">
            {`As a trusted call center, we don't just transfer calls—we deliver engaged, pre-qualified prospects that drive conversions, revenue growth, and long-term client relationships.`}
          </p>
          <Button size="lg" className="bg-[#731644] hover:bg-black">
            <Link href="/contact">Partner With Us Today</Link>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Card className="w-full overflow-hidden border-none p-0">
            <div className="w-full rounded-lg flex items-center justify-center ">
              <Image
                src={HandShakeImg}
                alt="Professional Handshake"
                className="rounded-lg"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Partner with Procure?
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We deliver engaged, pre-qualified prospects that drive conversions, revenue growth, and long-term client relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "👥",
              title: "Qualified Medicare Customers",
              description: "We generate and transfer calls from seniors actively seeking Medicare plans."
            },
            {
              icon: "💰",
              title: "Boosted Revenue Growth",
              description: "By delivering ready-to-enroll customers, we help you close more sales."
            },
            {
              icon: "🛡️",
              title: "Compliance You Can Trust",
              description: "Every transfer follows TCPA & CMS guidelines, protecting your business."
            },
            {
              icon: "📈",
              title: "Consistent Traffic Flow",
              description: "A steady stream of pre-screened Medicare leads for stronger growth."
            },
            {
              icon: "🤝",
              title: "Enhanced Trust & Credibility",
              description: "Position yourself as the trusted advisor we handle outreach."
            },
            {
              icon: "⚙️",
              title: "Scalable Solutions",
              description: "We scale our operations to match your needs regardless of size."
            }
          ].map((benefit, index) => (
            <Card key={index} className="h-full hover:shadow-md transition-shadow bg-[#731644]">
              <CardHeader>
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Comprehensive solutions designed to drive your Medicare business growth
          </p>
        </div>
        
        <Card className=" border-none bg-[#731644] rounded">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className=" bg-white rounded-lg flex items-center justify-center mb-8">
                  {/* <span className="text-gray-500">Customer Support Agent Image</span> */}
                  <Image
                    src={CustomerSupportImg}
                    alt="Customer Support Agent"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <ul className="space-y-6">
                  {[
                    "Live Transfers – Speak directly with pre-qualified customers in real-time.",
                    "Customer Engagement – Every call is nurtured, verified, and warmed up.",
                    "All Plan Types Covered – Medicare Advantage, Supplement & PDP.",
                    "Tailored Campaigns – Custom marketing campaigns for your goals.",
                    "Transparency & Reporting – Full visibility into call volume and performance."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Procure Advantage Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Procure Advantage
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            More than a call center—we are your growth partner focused on quality over quantity
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Card className="overflow-hidden border-none p-0">
            <div className="rounded-lg flex items-center justify-center">
              <Image
                src={GrowthChartImg}
                alt="Growth Chart"
                className="object-cover"
              />
            </div>
          </Card>
          <div className="md:w-1/2">
            <p className="text-lg text-white mb-6">
              We are more than a call center—we are your growth partner. Our focus is on quality over quantity, ensuring every call has a higher probability of conversion.
            </p>
            <ul className="space-y-4">
              {[
                "Expand your customer base with qualified Medicare prospects.",
                "Boost enrollments through a steady flow of interested clients.",
                "Increase revenue with more closed deals and higher commissions.",
                "Strengthen compliance and trust at every step."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            {/* <Button className="mt-6 bg-[#731644] hover:bg-black">
              Learn More About Our Process
            </Button> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{`Let's Grow Together`}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {`If you're a licensed agent or insurance agency looking to increase revenue through Medicare enrollments, Procure is ready to be your trusted partner.`}
        </p>
        <Button size="lg" className="bg-white text-[#3c65ab] hover:bg-gray-100">
          <Link href="/contact">Partner With Us Today</Link>
        </Button>
      </section>
    </div>
  );
};

export default Medicare;