import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Dock() {
  return (
    <div className='dock bg-black/5 p-4 px-6 flex gap-5 rounded-2xl backdrop-blur-lg shadow-lg border'>
        <Link href="/"><Image className='hover:scale-110 transition' alt='home' src="/home.svg" width={30} height={30}/></Link>
        <div className="w-[2px] h-[32px] bg-black rounded-3xl"></div>
        <Link href="/book"><Image className='hover:scale-110 transition' alt='book' src="/book.svg" width={30} height={30}/></Link>
        <Link href="/trade"><Image className='hover:scale-110 transition' alt='trade' src="/trade.svg" width={30} height={30}/></Link>
    </div>
  )
}
