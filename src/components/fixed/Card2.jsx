import React from 'react'
import { BiBookContent,BiNews,BiMobileLandscape,BiRightArrowAlt } from "react-icons/bi";
import { TfiRulerPencil } from "react-icons/tfi";
import Link from 'next/link';
import Image from 'next/image';

const Card2 = () => {
  return (
    <div className=' pt-10 '> 
            <div className='genos grid grid-cols-2 gap-5 text-white pb-36 mx-[300px] '>
                    <div>
                            <div className='text-start'>
                                  <p className='text-[25px] font-bold'>FEATURED PROJECTS</p>
                                  <p className='man'>Lorem ipsum dolor sit amet,consectetur</p>
                            </div>
                            <div className='pt-6' >
                                   <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  '>
                                    <Image src="/assets/craft.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-200 '>
                                  <p className='boy text-[30px] text-white'>Crypto </p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[14px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                             </div>
                             
                            
                    </div>
                    <div>
                            <div className='text-end'>
                                         <button className='hover:border-blue-200 border hover:text-blue-300  px-5 py-1 bg-blue-900 text-white font-bold border-black hover:bg-transparent '>
                                        <Link href="/">View All</Link>
                                    </button>
                            </div>
                            <div className='pt-12'>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  '>
                                    <Image src="/assets/craft2.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-200 '>
                                  <p className='boy text-[30px] text-white'>App Interface </p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[14px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                    </div>
              </div>
              <div className='grid grid-rows-2   '>
                <div className="bg-blue-900  h-[60vh] relative genos">
                     <div className='grid grid-cols-2 gap-5 mx-[300px] absolute  top-[-100px] '>
                     <div >
                            
                            <div className=''>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px] px-[35px]  '>
                                    <Image src="/assets/craft3.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-300 '>
                                  <p className='boy text-[30px] text-white font-bold'>NFT'S</p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[14px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                        </div>
                        <div>
                           
                            <div className=''>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  px-[35px]'>
                                    <Image src="/assets/craft5.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-300 '>
                                  <p className='boy text-[30px] text-white font-bold'>UI/UX</p>
                                  <div className='flex justify-start items-center'>
                                     <button className='text-[14px] font-bold'><Link href="/" >KNOW MORE </Link></button>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                        </div>
                        
                         
                     </div>
                     
                </div>
                <div className='h-[40vh] genos'>
                
                         <div className=' relative  top-[-90px]  '>
                         <div className='bg-black border border-blue-200 mx-[300px] grid grid-cols-2 p-10 justify-items-center items-center gap-3'>
                            <div className='text-start'>
                                    <div className='man text-3xl text-white font-bold pb-4'>
                                        <h1>
                                            Let's work together on your next project
                                        </h1>
                                    </div>
                                    <div className='man text-white text-sm'>
                                            I thank God for letting me finish this project, it stressed me like stupid
                                    </div>
                            </div>
                            <div>
                            <button className='hover:border-blue-200 border hover:text-blue-300  px-5 py-1 bg-blue-900 text-white font-bold border-black hover:bg-transparent '>
                                        <Link href="/">Contact</Link>
                                    </button>
                            </div>
                         </div>
                      </div> 

                      
                </div>
              </div>
              
        
      </div>
      
     
  )
}

export default Card2