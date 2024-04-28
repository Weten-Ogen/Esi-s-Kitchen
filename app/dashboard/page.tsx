import React from 'react'
import Image from 'next/image';
import Dash1 from '@/public/images/fulloption.jpg'
import Dash2 from '@/public/images/buffet.jpg'
import Dash3 from  '@/public/images/buffet2.jpg'
import Dash4 from '@/public/images/eat.jpg'
import Dash5 from '@/public/images/packs.jpg'
import Dash6 from '@/public/images/serveself.jpg'
import Dash7 from '@/public/images/eat.jpg'
import Dash8 from '@/public/images/filledpack.jpg'
import Dash9 from "@/public/images/jollofs.jpg"
import Logo from '@/public/logo.png'

export default function Dashboard() {
  return (
    <section className ="">    
        <div className="relative h-screen">
            {/* hero for dashboard */}
            <div className="absolute inset-0 bg-black/65 w-full  h-[100vh] rounded-lg -z-10"/>
            <div className="mx-auto text-center w-[90%]">
                <Image 
                width={200}
                height={200}
                src={Logo} 
                alt="logo"/>
            </div>
            <Image 
            className="w-full h-[100vh] rounded-lg -z-20 absolute inset-0"
            src={Dash1} 
            alt="dash1" 
            width={800} 
            height={800}
            />
            <div className="p-20">
                <div className="text-secondarycolor whitespace-normal tracking-widest
                flex justify-center text-4xl flex-col capitalize font-bold items-center ">
                    <p>better food</p>
                    <p>better mood</p>
                </div>
            </div>
        </div>
        {/* second tab */}
        <div className="relative h-screen">
            <ul className="absolute -top-10 right-0 bg-primecolor px-6 py-2 text-bgcolor text-lg uppercase bg-blend-darken rounded-l-lg ">
                <p>we serve</p>
                <p>we cook</p>
                <p>you enjoy</p>
            </ul>
            <Image
            className="w-full h-[60vh]" 
            src={Dash2} 
            alt="dash2" 
            width={800} 
            height={800}/>
            <div className="md:flex items-start justify-between text-justify p-2 gap-4">
                <div className="md:max-w-xl text-tcolor tracking-wide my-2 font-bold text-lg">
                    <p>

                    At Esi's Kitchen , we pride ourselves in providing  high quality food and services to our clients. Our team is experienced  and qualified  to handle any catering needs you may have. 
                    We can provide  a wide variety of menus and styles to fit your specific needs you may have .
                    </p>
                    <p>
                    We  can provide a wide variety of menus and styles to fit  your specific needs. We also offer the best of cartering  services, including traditional  weddings,food and beverags, buffet services and custom menu designed  to suit your request.
                    </p>
                </div>
                <div className='max-w-lg text-xl capitalize  font-bold text-secondarycolor my-4 text-justify'>
                    <p>
                    we keep an oustanding  reputation for execellence in weddings, catering, corporate catering , holiday party catering and so much more.
                    we will be very happy to work with you
                    </p>
                </div>
            </div>
        </div>

        {/* three tabs */}
        <article>
            <div>
                <h3>
                    we specialize in budget - friendly catering  &
                    event planning service
                </h3>
                <Image 
                src={Dash4}
                alt='dash3'
                width={500}
                height={500}
                />
            </div>
            <div>
                <Image src={Dash5} alt="dash5" width={500} height={500}
                />
                <h3>
                    The .
                </h3>
            </div>
            
        </article>
    </section>
  )
}
