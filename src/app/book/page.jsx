'use client'

import React from 'react'
import sampleData from '../../../public/sample'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function page() {
  const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/sign-in');
        }
    }, [status, router]);

  return (
    <div className="conBox mx-auto max-md:w-[380px] w-[850px] p-6 border rounded-xl">
      <h1 className='text-2xl pb-4 border-b mb-10'>Trade details</h1>
      <div className="flex flex-col gap-4">
        {sampleData.map((data, index) => (
          <div className='flex flex-col gap-2 border rounded-md py-4 px-8' key={index}>
            <div className='flex justify-between items-center border-b pb-2'>
            <p>{data.premium}</p>
            <p className={ data.pl>=0 ?`text-green-500` : `text-red-500`}>{data.pl>0 ?`+${data.pl}`: data.pl}</p>
            </div>
            <div className='flex gap-12 items-center max-md:justify-between'>
              <p className='pe-3'>{`Buy : ${data.entryPrice}`}</p>
              <p>{`Sell : ${data.exitPrice}`}</p>
            </div>
          </div>
        ))
          }
      </div>
    </div>
  )
}
