import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ExcellenceImage from '../../../public/assets/images/growthChart.svg'
import Image from "next/image"
import Link from "next/link"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1775bb] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">About Medical Billing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bridging Care and Clarity</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering precise medical billing that maximize revenue, streamline operations, and strengthen patient trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Card className="overflow-hidden border-none shadow-lg p-0">
                <div className="relative">
                  <Image
                    src={ExcellenceImage}
                    alt="Our Mission - Healthcare Excellence"
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
            <div className="lg:w-1/2">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-black mb-6">At Medical Billing, we bridge care and clarity</h2>
              <p className="text-lg text-black mb-6">
                We deliver precise medical billing that maximize revenue, streamline operations, and strengthen patient trust. Our dedicated team works tirelessly to ensure healthcare providers can focus on what matters most - patient care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-800">Maximize Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-700">Optimizing billing processes to increase collections and reduce denials</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-800">Streamline Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-700">Simplifying administrative tasks for more efficient practice management</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              The principles that guide everything we do at Procure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow ">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">💙</span>
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We maintain the highest ethical standards in all our interactions and operations.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle>Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We streamline processes to save time and resources for healthcare providers.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We continuously seek new ways to improve medical billing and practice management.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c5282] mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", image: "/placeholder-avatar1.jpg" },
              { name: "Michael Chen", role: "Chief Technology Officer", image: "/placeholder-avatar2.jpg" },
              { name: "Jessica Williams", role: "VP of Operations", image: "/placeholder-avatar3.jpg" },
              { name: "David Rodriguez", role: "Medical Billing Director", image: "/placeholder-avatar4.jpg" }
            ].map((person, index) => (
              <Card key={index} className="text-center border-none shadow-md overflow-hidden">
                <div className="h-60 relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <CardDescription>{person.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-sm uppercase tracking-wider">Claim Accuracy</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black rounded-2xl p-8 md:p-12 text-center text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</CardTitle>
              <CardDescription className="text-xl text-white/90">
                Join hundreds of healthcare providers who trust Procure with their medical billing needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-white text-[#2c5282] hover:bg-gray-100 font-semibold">
                <Link href="/contact" className="text-[#2c5282] ">
                  Contact Our Team Today
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;