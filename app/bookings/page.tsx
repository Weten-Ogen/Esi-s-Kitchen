import PackCard from '@/components/custom/packcard'
import React from 'react'
import ServiceCard from '@/components/custom/servicecard'

export default function Bookings() {
  return (
    <section>
      <h2>hello,</h2>
      <p>thank you for choosing us, we have carefully curiated and grouped various dishes to suit your taste and prefrences.</p>
      <p>70% payments is required for booking, clients are free to swap or add dishes from our menu to their preferred package. But note that some dishes attract extra charges. no major changes can be made four days to the event.</p>
      <p>Platinum, Diamond, Esi's Special  and Heritage packages serves 120 heads.</p>
      <p>Ghc 4,000 for service fee and transporation within Accra Metropolitan.</p>
      <p>Location outside Accra comes with extra charges.</p>
      <p>Delay Charge: Ghc 150/hour </p>
      <div className="grid grid-cols-1 gap-4 p-2">
          <ServiceCard name="buffet service" comment="engagement and wedding refreshments"/> 
          <ServiceCard name="full option buffet service" comment="we plan, execute and manage  your event to completion"/>   
          <ServiceCard name="packed service" comment="for that snappy taste and refreshments"/>    
      </div>
      
      
    </section>
  )
}
