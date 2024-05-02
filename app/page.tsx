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
import NavLinks from "@/components/custom/navlinks";

export default function Home() {
  return (
    <section className="scroll-smooth mt-20 md:mt-0">
        {/* hero section */}
        <article className="h-screen grid grid-cols-1   md:grid-cols-2 overflow-hidden  gap-2 justify-center items-center">
          <div className="">
            <div className="">
              {/* image start here */}
              <h2 className="text-2xl md:text-4xl  font-bold whitespace-normal uppercase antialiased text-center  tracking-widest">Make every milestone memorable</h2>
              <h3 className="text-lg text-clip text-orange-500 md:text-xl text-center  font-bold tracking-wider whitespace-normal capitalize my-3"> better food 
              better mood </h3>
              <div className="mx-auto flex gap-4  items-center justify-center">
                <NavLinks reff="/about">

                    <Btn 
                    vatype="default"
                    name="learn more" 
                    className="w-full bg-secondcolor text-white text-lg tracking-widest antialiased outline-secondcolor  shadow-md
                    hover:bg-secondcolor uppercase font-bold " 
                    />
                </NavLinks>
                <NavLinks reff="/bookings/buffet">
                <Btn 
                vatype="default"
                name="book now" 
                className="w-full bg-orange-500  text-white text-lg tracking-widest antialiased outline-orange-500  shadow-md
                hover:bg-orange-500 uppercase font-bold " 
                />
                </NavLinks>
              </div>
          </div>
          </div>
          <div>
            <div className="w-full  h-[80vh]  overflow-hidden bg-scroll object-contain ">
              <Image 
                src={Pic1}
                alt={"hero image"}
                width={500}
                height={500}
                className="w-full   object-cover"
                />
            </div>

          </div>
        </article>

        {/*story*/}
        <article className="h-screen overflow-hidden bg-gradient-to-r grid grid-cols-1 from-orange-600 to-bg-primecolor gap-2">
            <div className="p-4">
              <h2 className="font-bold uppercase text-2xl ">our story</h2>
              <p className="text-lg tracking-wide whitespace-normal max-w-lg text-justify md:max-w-3xl text-clip font-medium/8 mt-4 px-2">Hello from Esi's Kitchen. We are a group of chefs and cooks who like making delicious and personnalized food for meaningful moments such as  weddings, engagements and other milestone parties.</p>
              <p className="text-lg text-clip text-justify font-medium/8 tracking-wide px-2 max-w-lg md:max-w-3xl mt-4">
                Our dishes are thoughtfully made for your taste.
                We do deliveries in all suburbs of Greater Accra. 
              </p>
            </div>
          <div className="w-full  overflow-hidden">
            <Image
            alt="story pic"
            src={Pic2}
            className="w-full "
            width={500}
            height={500}
            />
          </div>
        </article>


        {/*services*/}
        <article className="p-2 ">
          <h2 className="text-2xl capitalize  font-bold tracking-wider whitespace-normal">services</h2>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
             <ServiceCard name="buffet service" comment="engagement and wedding refreshments"/> 
             <ServiceCard name="full option buffet service" comment="we plan,execute and manage your event to completion"/>   
             <ServiceCard name="packed service" comment="for that snappy taste and refreshments"/>
             
            </div>
          </div>
        </article>


        {/* testimonials */}
        <article className=" md:h-screen overflow-hidden  mt-2 pb-10">
          <h2 className="font-bold  text-2xl  capitalize tracking-wider text-clip whitespace-normal">testimonials</h2>
          {/* testicard */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
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


        { /* footer */}
        <article className=" ">
            <Footer/>
        </article>
    </section>
  )
}

