import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

function Footer() {
  return (
    <div className='footer py-4 w-full flex justify-center font-mono'>
      <span className={`${poppins.className}`}>
        Created by <Link href="" className='hover:text-[#07C5CE]'>ravikunwar</Link></span>
    </div>
  )
}

export default Footer