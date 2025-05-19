import { assets } from '@/Assets/assets'
import { Asset } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='px-5 py-5 md:px-12 lg:px-28'>
           <div className='flex justify-between items-center'>
           <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
           <button className='flex items-center gap-2 font-medium  py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' /></button>

           </div>
        </div>
    )
}

export default Header
