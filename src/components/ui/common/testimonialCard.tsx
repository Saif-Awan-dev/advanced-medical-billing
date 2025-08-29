// "use client"

// import { useState } from 'react'
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import TestimonialImgOne from '../../../../public/assets/images/medicare1.webp'
// import TestimonialImgTwo from '../../../../public/assets/images/reviewsImage2.webp'
// import TestimonialImgThree from '../../../../public/assets/images/reviewsImage3.webp'
// import Image from 'next/image'

// const testimonials = [
//     {
//         id: 1,
//         text: "I am very impressed with the services provided by Procure. They have been handling our billing for the past two years, and we have never had any issues. The team is knowledgeable, responsive and always goes above and beyond to help us. Thank you for your excellent services.",
//         author: "Juliana Igbinosun",
//         role: "Mental Health Practitioner",
//         company: "Engraco Behavioral Health Services",
//         imageUrl: TestimonialImgOne
//     },
//     {
//         id: 2,
//         text: "Working with you has been a game-changer for my practice. For months, I struggled to keep up with patient calls and manage my schedule independently. But since I started working with your team, I've been able to focus on what I do best - providing top-notch medical care to my patients. Your team is responsive, professional, and incredibly efficient, and I couldn't be more grateful for the peace of mind that your services provide. I would love to recommend you to everyone.",
//         author: "Dr. Mabel Johnson ",
//         role: "Mental Health Practitioner, Holistic Behavioral Health Services",
//         company: "Engraco Behavioral Health Services",
//         imageUrl: TestimonialImgTwo
//     },
//     {
//         id: 3,
//         text: "As a doctor, I was having difficulty managing patient calls independently. But since I started getting your Virtual Assistant services, I have been incredibly impressed. Your team is efficient, professional and always goes above and beyond to ensure that my patients are cared for. I'm so grateful for your services' peace of mind, and I can't imagine going back to managing calls on my own.",
//         author: "Dr. Annet Kabuusu",
//         role: "Mental Health Practitioner, Global Behavioral Healthcare",
//         company: "Engraco Behavioral Health Services",
//         imageUrl: TestimonialImgThree
//     },
//     // Add more testimonials here...
// ]

// export default function TestimonialCarousel() {
//     const [current, setCurrent] = useState(0)

//     const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
//     const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

//     return (
//         <div className="relative w-[85%] mx-auto my-10">
//             <Card className="p-8">
//                 <CardContent className="p-0 space-y-6 flex">
//                     <div className='w-[50%]'>
//                         <Image src={testimonials[current].imageUrl} alt="testimonil" />
//                     </div>
//                     <div className='w-[40%]'>
//                         <p className="text-4xl italic text-muted-foreground mb-5">
//                             "{testimonials[current].text}"
//                         </p>
//                         <div className="flex items-center gap-4">
//                             <div className="flex-1">
//                                 <div className="font-semibold">{testimonials[current].author}</div>
//                                 <div className="text-sm text-muted-foreground">
//                                     {testimonials[current].role}, {testimonials[current].company}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>

//             {/* Navigation buttons */}
//             <div className="flex justify-center gap-2 mt-4 absolute bottom-10 right-15">
//                 <Button variant="outline" size="icon" onClick={prev} className='cursor-pointer bg-[#3c65ab] text-white'>
//                     <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <Button variant="outline" size="icon" onClick={next} className='cursor-pointer bg-[#3c65ab] text-white'>
//                     <ChevronRight className="h-4 w-4" />
//                 </Button>
//             </div>
//         </div>
//     )
// }
"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialImgOne from '../../../../public/assets/images/medicare1.webp'
import TestimonialImgTwo from '../../../../public/assets/images/reviewsImage2.webp'
import TestimonialImgThree from '../../../../public/assets/images/reviewsImage3.webp'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        text: "I am very impressed with the services provided by Procure. They have been handling our billing for the past two years, and we have never had any issues. The team is knowledgeable, responsive and always goes above and beyond to help us. Thank you for your excellent services.",
        author: "Juliana Igbinosun",
        role: "Mental Health Practitioner",
        company: "Engraco Behavioral Health Services",
        imageUrl: TestimonialImgOne
    },
    {
        id: 2,
        text: "As a doctor, I was having difficulty managing patient calls independently. But since I started getting your Virtual Assistant services, I have been incredibly impressed. Your team is efficient, professional and always goes above and beyond to ensure that my patients are cared for. I'm so grateful for your services' peace of mind, and I can't imagine going back to managing calls on my own.",
        author: "Dr. Annet Kabuusu",
        role: "Mental Health Practitioner,",
        company: "Global Behavioral Healthcare",
        imageUrl: TestimonialImgTwo
    },
    {
        id: 3,
        text: "Working with you has been a game-changer for my practice. For months, I struggled to keep up with patient calls and manage my schedule independently. But since I started working with your team, I've been able to focus on what I do best - providing top-notch medical care to my patients. Your team is responsive, professional, and incredibly efficient, and I couldn't be more grateful for the peace of mind that your services provide. I would love to recommend you to everyone.",
        author: "Dr. Mabel Johnson ",
        role: "Mental Health Practitioner,",
        company: "Holistic Behavioral Health Services",
        imageUrl: TestimonialImgThree
    },
    // Add more testimonials here...
]

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }
    
    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return
        
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        
        return () => clearInterval(interval)
    }, [isAutoPlaying])

    return (
        <div className="relative w-full max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-8 bg-[#f1a10d]">
            <Card className="p-4 sm:p-6 lg:p-8 bg-[#731664]">
                <CardContent className="p-0 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                    {/* Image Section */}
                    <div className='w-full lg:w-[45%] xl:w-[40%] flex justify-center'>
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 overflow-hidden rounded-lg">
                            <Image 
                                src={testimonials[current].imageUrl} 
                                alt="Testimonial" 
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 288px, (max-width: 1280px) 320px, 352px"
                            />
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className='w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left text-white'>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic  mb-4 md:mb-5 lg:mb-6 text-black-500">
                            {`${testimonials[current].text}`}
                        </p>
                        <div className="flex flex-col items-center lg:items-start gap-2 text-white">
                            <div className="font-semibold text-base sm:text-lg md:text-xl">
                                {testimonials[current].author}
                            </div>
                            <div className="text-sm sm:text-base text-white">
                                {testimonials[current].role}
                            </div>
                            <div className="text-sm sm:text-base text-white">
                                {testimonials[current].company}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-3 mt-6 lg:mt-8">
                <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prev} 
                    className='cursor-pointer bg-[#731664] text-white hover:bg-[#2a4a82] h-10 w-10 sm:h-12 sm:w-12'
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                
                {/* Indicator dots */}
                <div className="flex items-center gap-2 mx-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrent(index)
                                setIsAutoPlaying(false)
                            }}
                            className={`h-3 w-3 rounded-full transition-all ${
                                current === index 
                                    ? 'bg-[#731664] scale-110' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                
                <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={next} 
                    className='cursor-pointer bg-[#731664] text-white hover:bg-[#2a4a82] h-10 w-10 sm:h-12 sm:w-12'
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
            </div>
        </div>
    )
}