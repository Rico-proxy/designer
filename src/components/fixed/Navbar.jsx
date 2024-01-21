import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=' head flex h-8 justify-around py-8 px-6 items-center text-center text-[15px] '>
        
            <div>
                 <Image src="/assets/logo.png" alt='me' width={75} height={75} />   
             </div>
            <div className=' flex text-blue-900 font-bold space-x-4 animate-pulse'>
                <div className='hover:underline'>
                    <Link href="/">HOME</Link>
                </div>
                <div className='hover:underline'>
                    <Link href="/">PROJECT</Link>
                </div>
                <div className='hover:underline'>
                    <Link href="/">ABOUT</Link>
                </div>
                <div className='hover:underline'>
                    <Link href="/">CONTACT</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar