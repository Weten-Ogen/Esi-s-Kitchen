import React from 'react'

export default function Footer() {
  return (
    <div className='p-4'>
        <h3 className="text-4xl text-clip capitalize font-bold tracking-wider text-center">Esi's kitchen</h3>
        <div className="text-center">
            <p className='capitalize   text-2xl tracking-wider font-medium'>get in touch</p>
            <div className='my-3'>
                <h4 className='font-medium text-lg  text-orange-500 tracking-wider'>mailing address</h4>
                <pre className='text-lg' > Gbawe c.p opp Immanuel Methods</pre>
                <pre className='text-lg'>Church & Tema Comm 11 station</pre>
            </div>
            <div className='mb-3'>
                <h4  className="text-lg text-orange-500 tracking-wide">email address</h4>
                <pre className="text-lg">esiskitchen@gmail.com</pre>
            </div>
            <div className="text-lg">
                <h4 className='text-lg tracking-wide text-orange-500'>phone number</h4>
                <pre className="text-lg">
                    +233-23-3940-156
                </pre>
                <pre className='text-lg'>
                    +233-30-3959-220
                </pre>
            </div>
        </div>
        
    </div>
  )
}
