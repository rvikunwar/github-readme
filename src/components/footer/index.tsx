import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import Github from '../icons/Github';

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

function Footer() {
  return (
    <div className='footer py-4 w-full flex justify-center font-mono'>
      <span className={`${poppins.className} flex items-center`}>
        Created by <Link href="" className='hover:text-[#07C5CE] flex mx-2'>{" "}<Github/> <span>ravikunwar</span></Link></span>
    </div>
  )
}

export default Footer