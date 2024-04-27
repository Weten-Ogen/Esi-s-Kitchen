import Image from "next/image";
import Pic1 from '@/public/pic1.png';
import Pic2 from  '@/public/pic2.png';
import Pic3 from '@/public/pic3.png';
import Pic4 from '@/public/pic4.png';
import Pic5 from '@/public/pic5.png';
import Btn from "@/components/general/btn";
import ServiceCard from "@/components/custom/servicecard";


export default function Home() {
  return (
    <section className="scroll-smooth ">
        {/* hero section */}
        <article className="h-screen bg-orange-500 bg-gradient-to-r ">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">

            <div className="mx-auto space-y-3">
            {/* image start here */}
            <h2 className="text-2xl tracking-wider text-white ">Make every milestone memorable</h2>
            <h3 className="text-lg tracking-wider text-white">Celebrate with better food for better mood ...</h3>
            <Btn 
            vatype="outline"
            name="get started" 
            className="text-orange-300 capitalize tracking-wider  hover:bg-white hover:-translate-y-0.5 rounded-[sm]  px-6 py-2 ring-1 ring-orange-600 shadow-lg shadow-white text-lg hover:text-orange-500" 
             />
            
            </div>
            <div className="">
              <Image 
                src={Pic1}
                alt={"hero image"}
                width={500}
                height={500}
                />
            </div>
          </div>
        </article>
        {/*story*/}
        <article className="h-screen ">
          <div className="flex items-center ">
            <div>
              <h2 className="">our story</h2>
              <p>Hello from Esi's Kitchen ! We are a group of chefs and cooks who like making delicious and personnalized food for meaningful moments such as  weddings, engagements and other milestone parties.</p>
              <p>
                Our dishes are thoughtfully made for your taste.
                We do deliveries in all suburbs of Greater Accra. 
              </p>
            </div>
            <Image
            alt="story pic"
            src={Pic2}
            width={800}
            height={800}
            />
            <div>

            </div>

          </div>
        </article>

                {/*services*/}
        <article className="">
          <h2 className="text-2xl tracking-wider capitalize underline-offset-4  font-bold">services</h2>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
             <ServiceCard name="buffet service" comment="engagement and wedding refreshments"/> 
             <ServiceCard name="full option buffet service" comment="we plan, execute and manage  your event to completion"/>   
             <ServiceCard name="packed service" comment="for that snappy taste and refreshments"/>
             
            </div>

          </div>
        </article>


    </section>
  )
}

