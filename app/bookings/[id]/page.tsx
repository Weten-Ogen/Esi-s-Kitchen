import PackCard from '@/components/custom/packcard';
import { singlebook } from '@/next'
import React from 'react'
import Diamond from '@/public/products/kenkey.jpg'
import Palatinum from '@/public/images/filledpack.jpg'
import Special from '@/public/products/friedrice.jpg'
import Heritage from '@/public/products/yam.jpg'
import Premium from '@/public/images/redpack.jpg'
import Standard from '@/public/products/pizza.jpg'



export default function SingleBooking({params}:singlebook) {
  const {id} = params;
  return (
    <div className="font-bold text-4xl ">
      <div className='p-8'>
        <div className="text-xl">
            {id} package
        </div>
        <ul className="grid gap-4 rounded-lg grid-cols-1  items-start md:grid-cols-2">
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
        items={["jollof", "waakye" ,"fried rice","chicken","fish","salad","spaghetti or vegetable stir fry","beef or chicken sauce", "gizzard or pork khebab + goat khebab", "keewele", "banku with grilled tilpia + okro stew","riceball with groundnut soup or kenkey with the family","fufu with goat light soup or chicken wings light soup"]}/>

<PackCard
        name="esi's special"
        price={105}
        imageurl={Special} 
        items={["assorted jollof", "waakye" ,"assorted fried rice","fried or grilled chicken","fried fish","salad","spaghetti","vegatable rice","beauce", "gizzard/goat/pork khebab", "kelewele", "banku with grilled tilapia & okro stew","tili + okro stew","kokontr riceball with groundnut soup", "kenkey with themily","aprapra"]}/>
        <PackCard
        name="standard"
        imageurl={Standard}
        price={50} 
        items={["jollof", "waakye" ,"fried rice","fried chicken","salad","spaghetti"]}/>
        <PackCard
        name="Heritage"
        price={75} 
        imageurl={Heritage}
        items={["aprapransa or mpotompotor","ampesi with palava sauce or garden eggs stew","kenkey with family","konkonte or  rice balls with groundnut soup", "fufu with goat light soup or chickien wing light soup", "RedRed (GoB3)or bambara beans with kaklo "]}/>
        <PackCard
        name="premium"
        price={60} 
        imageurl={Premium}
        items={["jollof", "waakye" ,"fried rice","fried chicken","salad","spaghetti or kelewele","banku + okro stew"]}/>
      </ul>
      </div>
    </div>
  )
}
