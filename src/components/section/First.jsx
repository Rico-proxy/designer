import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const First = () => {
  return (
    <div className=' flex  space-x-6 justify-center '>
    <div className='flex-shrink-0 '>
        <Image src="/assets/ade.png" alt='' width={400} height={300} className='' />
    </div>
    <div className='genos pt-[195px]'>
        <div className='flex flex-col text-start space-y-2 '>
            <p className="text-white font-bold text-3xl">Hello I am Ade</p>
            <p className='text-blue-400 text-4xl font-extrabold head'>Visual Designer</p>
            <div className='text-gray-400 text-lg w-80'>
                <p>Hey there! I'm your go-to visual wizard. I take wild ideas and whip up designs that jump off the screen. Turning imagination into pixels is my jam, and I'm all about crafting digital experiences that wow. Excited to bring a touch of magic to your visuals!</p>
            </div>
            <div>
                <button className='hover:border-blue-200 border hover:text-blue-300  px-5 py-1 bg-blue-900 text-white font-bold border-black hover:bg-transparent '>
                    <Link href="/">About Me</Link>
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default First