"use client"
import Link from 'next/link';
import React from 'react'
import { BiBookContent,BiNews,BiMobileLandscape,BiRightArrowAlt } from "react-icons/bi";
import { TfiRulerPencil } from "react-icons/tfi";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import Image from 'next/image';
const Card = () => {
  return (
         <div className='pt-[60px] genos absolute'>
           <div className='grid grid-cols-3  mx-[300px] text-black    '>
                 <div className='flex flex-col space-y-[100px]'>
                   <div className='p-4 bg-black border border-white text-start  shadow-lg text-blue-200 py-8 mx-2'>
                    <div className='text-blue-200'>
                    <Image src="/assets/ui.png" alt='' width={50} height={50} className='' />
                    </div>
                    <div className='pt-5 space-y-4'>
                        <p className=' text-2xl  font-[800]'>UI DESIGN</p>
                        <p className='text-sm man text-white font-[600]'>Lorem ipsum is simply text <br/>of the printing type.</p>
                        <div className='flex items-center text-white font-bold'>
                         <p><Link href="/">KNOW MORE </Link></p>
                         <BiRightArrowAlt/>
                        </div>
                    </div>
                     </div>
                     <div className='grid grid-rows-2 man gap-3 pr-3 pb-4'>
                        <div className='bg-black border text-blue-200  text-[] border-blue-200 shadow-lg space-y-1 py-2'>
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div className='text-[30px] font-extrabold'>
                                    {isVisible ? <CountUp end={60}  /> : null}
                                    +
                                </div>
                                )}
                            </VisibilitySensor>
                            <p className='text-white'>Clients</p>
                        </div>
                        <div className='bg-black border border-blue-200 shadow-lg space-y-1  py-2'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div className='text-[30px] font-extrabold text-blue-200'>
                                    {isVisible ? <CountUp end={122}  /> : null}
                                    +
                                </div>
                                )}
                            </VisibilitySensor>
                            <p className='text-white'>COmpleted projects</p>
                        </div>
              
              
                    </div>
                  </div>
                 <div className='flex flex-col space-y-[100px]'>
                  
                   <div className='p-4 border border-black bg-white  text-start text-black shadow-lg py-8 mx-2'>
                        <div className=''>
                        <Image src="/assets/branding.png" alt='' width={50} height={50} className='' />
                        </div>
                        <div className='pt-5 space-y-4'>
                            <p className='font-bold text-2xl'>BRANDING</p>
                            <p className='text-sm  font-bold text-black'>Lorem ipsum is simply text <br/>of the printing type.</p>
                            <div className='flex items-center text-black font-bold'>
                            <p><Link href="/">KNOW MORE </Link></p>
                            <BiRightArrowAlt/>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 man gap-3'>
                        <div className='bg-black border shadow-lg space-y-1  py-2 '>
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div className='text-[30px] font-extrabold text-blue-200'>
                                    {isVisible ? <CountUp end={60}  /> : null}
                                    +
                                </div>
                                )}
                            </VisibilitySensor>
                            <p className='text-white'>Satisfied clients</p>
                        </div>
                        <div className='bg-black border shadow-lg space-y-1  py-2'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div className='text-[30px] font-extrabold text-blue-200'>
                                    {isVisible ? <CountUp end={10}  /> : null}
                                    +
                                </div>
                                )}
                            </VisibilitySensor>
                            <p className='text-white'>Achievments</p>
                        </div>
              
              
                    </div>
                </div>
              <div className='flex flex-col space-y-[100px]'>
                   <div className='p-4 bg-black border text-start  shadow-lg py-8 mx-2 text-blue-200'>
                    <div className='text-blue-700 '>
                    <Image src="/assets/product.png" alt='' width={50} height={50} className='text-white' />
                    </div>
                    <div className='pt-5 space-y-4'>
                        <p className='font-[800] text-xl'>PRODUCT</p>
                        <p className='text-sm text-white  font-bold'>Lorem ipsum is simply text<br/> of the printing type.</p>
                        <div className='text-white flex items-center font-bold'>
                         <p><Link href="/">KNOW MORE </Link></p>
                         <BiRightArrowAlt/>
                        </div>
                    </div>
                    </div>
                    <div className='text-blue-200 man leading-none pt-8 pl-6'>
                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div className='pt-5 text-[70px] font-extrabold text-white'>
                                    {isVisible ? <CountUp end={12}  /> : null}
                                    +
                                </div>
                                )}
                            </VisibilitySensor>
                            <p className='text-white text-[20px]'>Year experiences</p>
                     </div>
            </div>
    </div>
  
    
    </div>  
  )
}

export default Card