import Image from "next/image";
import    Pic2   from "@/public/images/serveself.jpg"
import Pic1 from '@/public/images/buffet.jpg'
import Btn from "@/components/general/btn";
import ServiceCard from "@/components/custom/servicecard";
import TestiCard from "@/components/custom/testicard";
import Test1 from '@/public/testimonial/testmo1.jpg'
import Test2 from "@/public/testimonial/testmo2.jpg";
import Test3 from "@/public/testimonial/testmo3.jpg";
import Footer from "@/components/general/footer";

export default function Home() {
  return (
    <section className="scroll-smooth ">
        {/* hero section */}
        <article className="">
          <div className="">

            <div className="">
            {/* image start here */}
            <h2 className="">Make every milestone memorable</h2>
            <h3 className="">Celebrate with better food for better mood ...</h3>
            <Btn 
            vatype="outline"
            name="get started" 
            className="" 
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
        <article className="">
          <div className="">
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
          <h2 className="">services</h2>
          <div className="">
            <div className="">
             <ServiceCard name="buffet service" comment="engagement and wedding refreshments"/> 
             <ServiceCard name="full option buffet service" comment="we plan, execute and manage  your event to completion"/>   
             <ServiceCard name="packed service" comment="for that snappy taste and refreshments"/>
             
            </div>

          </div>
        </article>
        {/* testimonials */}
        <article>
          <h2>testimonials</h2>
          {/* testicard */}
          <ul className="flex items-center gap-4 p-4">
            <TestiCard
            comment="For my sister's wedding, We chose Esi's Kitchen as the caterers and we couldn't be happier with our decision"
            imageurl={Test1}
            className=""
            />
            <TestiCard
            comment="I love my engagement buffet  setup because, my fiance worked closely with Esi's Kitchen to design the decor literally just for me"
            imageurl={Test2}
            className=""
            />
            <TestiCard
            comment="My mom loved the jollof I sent her for her birthday. She loved the taste of homemade and personnalized service of Esi's kitchen.Thinking of ordering two packs for myself, too!"
            imageurl={Test3}
            className=""
            />

          </ul>
        </article>
      {/* footer */}
      <Footer/>
    </section>
  )
}

