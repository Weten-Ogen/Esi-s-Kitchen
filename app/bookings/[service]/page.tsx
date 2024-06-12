import PackCard from '@/components/custom/packcard';
import { singlebook } from '@/next'
import React from 'react'
import Diamond from '@/public/products/kenkey.jpg'
import Palatinum from '@/public/images/filledpack.jpg'
import Special from '@/public/products/friedrice.jpg'
import Heritage from '@/public/products/yam.jpg'
import Premium from '@/public/images/redpack.jpg'
import Standard from '@/public/products/pizza.jpg'
import { wait } from '@/lib/utils';
import { auth } from '@/auth';



export default async function SingleBooking({params}:singlebook) {
  const {service} = params;
  const session = await auth();
  if(!session) {
    return <div className='pt-20 flex text-2xl capitalize items-center justify-center '> You need to login first!... </div>
  }

  return (
    <section className=" ">
      <article className="pt-24 m-h-screen">
        <div className=''>
          <div className="text-2xl font-bold tracking-wider text-clip  uppercase text-orange-500 text-center italic text-underline">
              {service} package
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <PackCard
          name='platinum'
          price={75}
          imageurl={Palatinum} 
          items={["jollof", "waakye" ,"fried rice","chicken","fish","salad","spaghetti","vegetable rice","beef sauce", "gizzard or goat", "khebab", "kelewele", "banku with grilled","tilipia + okro stew","kokonte or riceball with groundnut soup", "kenkey with the family","aprapransa"]} 
          
          />
          <PackCard
          name='diamond'
          price={85} 
          imageurl={Diamond}
          items={["jollof", "waakye" ,"fried rice","chicken","fish","salad","spaghetti or vegetable stir fry","beef or chicken sauce", "gizzard or pork khebab + goat khebab", "keewele", "banku with grilled tilipia and okro stew","riceball with groundnut soup or kenkey with the family","fufu with goat light soup or chicken wings light soup"]}/>

          <PackCard
          name="esi's special"
          price={105}
          imageurl={Special} 
          items={["assorted jollof", "waakye" ,"assorted fried rice","fried or grilled chicken","fried fish","salad","spaghetti","vegatable rice","beauce", "gizzard/goat/pork khebab", "kelewele", "banku with grilled tilapia & okro stew","tilipia okro stew","kokonte or riceball with groundnut soup", "kenkey with family","aprapransa"]}/>
          <PackCard
          name="standard"
          imageurl={Standard}
          price={50} 
          items={["jollof", "waakye" ,"fried rice","fried chicken","salad","spaghetti"]}/>
          <PackCard
          name="Heritage"
          price={75} 
          imageurl={Heritage}
          items={["aprapransa or mpotompotor","ampesi with palava sauce or garden eggs stew","kenkey with family","konkonte or  rice balls with groundnut soup", "fufu with goat light soup or chickien wing light soup", "RedRed (GoB3) or bambara beans with akaklo "]}/>
          <PackCard
          name="premium"
          price={60} 
          imageurl={Premium}
          items={["jollof", "waakye" ,"fried rice","fried chicken","salad","spaghetti or kelewele","banku and okro stew"]}/>
        </ul>
        </div>
      </article>
    </section>
  )
}
