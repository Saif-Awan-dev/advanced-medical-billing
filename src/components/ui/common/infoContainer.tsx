// import Image from 'next/image';
// import ReviewsOne from '../../../../public/assets/images/medicare1.webp'
// import { Button } from '../button';
// import Link from 'next/link';
// import { ArrowLeftIcon, ArrowRight } from 'lucide-react';

// const InfoContainer = ({
//     title,
//     text
// }:{
//     title: string,
//     text: string 
// }) =>{
//     return(
//         <div className='flex items-top gap-10 mx-auto w-[85%] my-10 bg-gray-100 p-4 rounded shadow dark:bg-[#3c65ab]'>
//             <div className='w-full h-82 overflow-hidden'>
//                 <Image src={ReviewsOne} alt="person image" />
//             </div>
//             <div className='w-full'>
//                 <h1 className='font-bold text-4xl mb-2 text-[#3c65ab]'>{title}</h1>
//                 <p className='text-left text-lg w-96'>
//                    {text}
//                 </p>
//                 <Link href="/docs">
//                     <Button className='bg-[#3c65ab] mt-10 cursor-pointer'>
//                         Read More <ArrowRight />
//                     </Button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default InfoContainer;

import Image, { StaticImageData } from 'next/image';
import { Button } from '../button';
import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Card } from "@/components/ui/card"

const InfoContainer = ({
    title,
    text,
    rating = 5, // Optional rating prop
    link,
    imageUrl
}: {
    title: string;
    text: string;
    rating?: number;
    link:string;
    imageUrl:StaticImageData | string
}) => {
    return (
        <Card className="w-full  max-w-6xl p-4 mx-auto my-12 overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-[#731664] from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative group overflow-hidden">
                    <Image 
                        src={imageUrl} 
                        alt="Person image" 
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-full shadow-md flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{rating}.0</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8">
                    <div className="flex items-start mb-4">
                        <Quote className="w-8 h-8 text-[#3c65ab]/20 text-white dark:text-blue-300/30 mr-3 flex-shrink-0" />
                        <h1 className="font-bold text-2xl md:text-3xl text-white dark:text-blue-300 mb-3 leading-tight">
                            {title}
                        </h1>
                    </div>
                    
                    <p className="text-white dark:text-gray-300 text-lg leading-relaxed mb-6 line-clamp-4">
                        {text}
                    </p>

                    {/* Stats or Features */}
                    <div className="flex gap-6 mb-6">
                        <div className="text-center">
                            <div className="font-bold text-2xl text-white dark:text-blue-300">10+</div>
                            <div className="text-sm text-white dark:text-gray-400">Years</div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-white dark:text-blue-300">100%</div>
                            <div className="text-sm text-white dark:text-gray-400">Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-white dark:text-blue-300">0</div>
                            <div className="text-sm text-white dark:text-gray-400">Issues</div>
                        </div>
                    </div>

                    <Link href={`/${link}`}>
                        <Button className="bg-white hover:bg-black hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 group cursor-pointer text-black">
                            <span className="font-semibold">Read Full Story</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default InfoContainer;