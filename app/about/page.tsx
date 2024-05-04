import React from 'react'
import Image from 'next/image';
import Dash2 from '@/public/images/buffet.jpg'
import Dash4 from '@/public/images/eat.jpg'
import Dash6 from '@/public/images/serveself.jpg'
import Dash9 from "@/public/images/jollofs.jpg"
import Logo from '@/public/logo.png'
import FriedRice from '@/public/products/friedrice.jpg'
import Footer from '@/components/general/footer';


export default function About() {
  return (
    <section className ="">
        <article className='h-screen w-full relative  pt-16 '>
            <div className=" flex flex-col items-center w-full ">
                {/* hero for dashboard */}
                <div className='w-40'>
                    <Image 
                    width={100}
                    height={100}
                    alt="logo image"
                    src={Logo}
                    className ='w-full object-cover'
                    />
                </div>
                <div className='w-full h-[50vh] rounded-sm overflow-hidden'>
                    <Image 
                    src={FriedRice}
                    alt="full option"
                    width={500}
                    height={500}
                    className="mx-auto  rounded-sm object-cover"
                    />
                </div>
                <div className="">
                    <div className="text-2xl tracking-wider whitespace-normal  text-clip  font-medium ">
                        <p className='text-3xl italic uppercase text-orange-500'>better food</p>
                        <p className="text-center text-3xl text-orange-500 uppercase italic">better mood</p>
                    </div>
                </div>
            </div>
        </article>    
        {/* second tab */}
        <article className="grid  grid-cols-1 relative md:grid-cols-2 col-span-2  gap-2 mt-5">
            <div className="">
                <ul className="absolute top-0 left-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-r-lg ">
                    <p>we serve</p>
                    <p>we cook</p>
                    <p>you enjoy</p>
                </ul>
                <div className="w-full rounded-r-lg h-[60vh] overflow-hidden">
                    <Image
                    className="w-full h-auto  object-cover rounded-r-lg" 
                    src={Dash4} 
                    alt="dash2" 
                    width={500} 
                    height={500}/>
                </div>
            </div>
                <div className="max-w-lg text-lg  text-clip font-medium text-justify p-4 tracking-wide whitespace-normal">
                    <p className='mb-3'>
                    At Esi's Kitchen , we pride ourselves in providing  high quality food and services to our clients. Our team is experienced  and qualified  to handle any catering needs you may have. 

                    We can provide  a wide variety of menus and styles to fit your specific needs you may have .
                    </p>
                    <p>
                    We  can provide a wide variety of menus and styles to fit  your specific needs. We also offer the best of cartering  services, including traditional  weddings,food and beverags, buffet services and custom menu designed  to suit your request.
                    </p>
                </div>
            
            <div className='max-w-lg text-lg font-bold  text-secondcolor tracking-widest text-clip whitespace-normal from-orange-500 bg-gradient-to-l to-orange-400 p-2 via-secondcolor  text-center   my-2'>
                <p className=' p-2 via-secondcolor text-white font-bold'>
                we keep an oustanding  reputation for<br/> execellence in weddings, catering,<br/> corporate catering , holiday party <br/>catering and so much more.<br/>
                we will be very happy to work with you. 
                </p> 
            </div>
            <div className="">
                <ul className="absolute bottom-0  right-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
                    <p>we serve</p>
                    <p>we cook</p>
                    <p>you enjoy</p>
                </ul>
                <div className="w-full h-[60vh] overflow-hidden">
                    <Image
                    className="w-full h-auto  object-cover" 
                    src={Dash2} 
                    alt="dash2" 
                    width={800} 
                    height={800}/>
                </div>
            </div>
        </article>
        {/* third article */}
        <article className="relative  grid md:h-screen grid-cols-1 md:grid-cols-2  cols-span-2 gap-4  overflow-hidden">
        
            <div className="">
                <ul className="absolute top-0 left-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-r-lg ">
                    <p>we serve</p>
                    <p>we cook</p>
                    <p>you enjoy</p>
                </ul>
                <div className="w-full rounded-r-lg h-[60vh] overflow-hidden">
                    <Image
                    className="w-full h-auto  object-cover rounded-r-lg" 
                    src={Dash9} 
                    alt="dash2" 
                    width={500} 
                    height={500}/>
                </div>
            </div>
            <div className="max-w-md  text-xl  text-clip font-medium text-center from-orange-500 bg-gradient-to-l to-orange-400  via-secondcolor p-4 tracking-wide whitespace-normal">
            <p>we speacialize in budget friendly catering & event planning services</p>    
            </div>
            <div className='max-w-lg text-lg font-bold  text-slate-800 tracking-wider text-clip whitespace-normal text-justify  p-4 from-orange-500 to-orange-400 '>
            <p className="">
                        Thank you for choosing us, to the right is a list of our packages.Kindly glance through and  select your preferred package.
                    </p>
                
            </div>
            <div className="">
                <ul className="absolute bottom-0  right-0 bg-primecolor px-6 py-2 text-white text-lg uppercase bg-blend-darken rounded-l-lg ">
                    <p>we serve</p>
                    <p>we cook</p>
                    <p>you enjoy</p>
                </ul>
                <div className="w-full h-[60vh] overflow-hidden">
                    <Image
                    className="w-full h-auto  object-cover" 
                    src={Dash6} 
                    alt="dash2" 
                    width={800} 
                    height={800}/>
                </div>
            </div>
        </article>
        <article>
            <Footer/>
        </article>       
    </section>
  )
}
