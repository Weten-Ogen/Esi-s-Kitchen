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
        <article className='h-screen w-full relative  mt-16 '>
            <div className=" flex flex-col items-center w-full ">
                {/* hero for dashboard */}
                <div className='w-40'>
                    <Image 
                    width={100}
                    height={100}
                    alt="logo image"
                    src={Logo}
                    className ='w-full'
                    />
                </div>
                <div className='w-full h-[50vh] rounded-sm overflow-hidden'>
                    <Image 
                    src={FriedRice}
                    alt="full option"
                    width={500}
                    height={500}
                    className="mx-auto  rounded-sm"
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
        <article className="relative md:h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-2  gap-4 overflow-hidden">
            <div className="">
                <ul className="absolute -top-10 left-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
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
            
            <div className='max-w-lg text-lg font-bold  text-secondcolor tracking-widest text-clip whitespace-normal  text-center p-4 flex flex-col-reverse my-3'>
                <p className='bg-gradient-to-tr from-orange-500 to-orange-400 p-2 via-secondcolor text-white font-bold'>
                we keep an oustanding  reputation for<br/> execellence in weddings, catering,<br/> corporate catering , holiday party <br/>catering and so much more.<br/>
                we will be very happy to work with you. 
                </p> 
            </div>
            <div className="">
                <ul className="absolute bottom-0 md:-bottom-20 right-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
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
        <article className="relative  grid md:h-screen grid-cols-1 md:grid-cols-2  gap-4 mt-5 overflow-hidden">
        
            <div className="">
                <ul className="absolute -top-10 left-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
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
                <div className="max-w-lg text-lg  text-clip font-medium text-justify p-4 tracking-wide whitespace-normal">
                    <p className='mb-3'>
                    At Esi's Kitchen , we pride ourselves in providing  high quality food and services to our clients. Our team is experienced  and qualified  to handle any catering needs you may have. 

                    We can provide  a wide variety of menus and styles to fit your specific needs you may have .
                    </p>
                    <p>
                    We  can provide a wide variety of menus and styles to fit  your specific needs. We also offer the best of cartering  services, including traditional  weddings,food and beverags, buffet services and custom menu designed  to suit your request.
                    </p>
            </div>
            
            <div className='max-w-lg text-lg font-bold  text-secondcolor tracking-widest text-clip whitespace-normal  text-center p-4 flex flex-col-reverse my-3'>
                <p className='bg-gradient-to-tr from-orange-500 to-orange-400 p-2 via-secondcolor text-white font-bold'>
                we keep an oustanding  reputation for<br/> execellence in weddings, catering,<br/> corporate catering , holiday party <br/>catering and so much more.<br/>
                we will be very happy to work with you. 
                </p> 
            </div>
            <div className="">
                <ul className="absolute bottom-0 md:-bottom-20 right-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
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
