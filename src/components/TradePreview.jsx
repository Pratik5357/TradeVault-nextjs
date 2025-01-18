import Link from 'next/link';
import React from 'react'

export default function TradePreview({ data }) {
    const pl = (data.sellPrice - data.buyPrice) * data.quantity;
    // console.log(data);
    const formattedTradeDate = new Date(data.tradeDate).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className='flex flex-col gap-3 w-full border p-1 rounded-md border-gray-200'>
            <div className='flex max-md:flex-col max-md:p2 max-md:items-start gap-5 items-center justify-between p-4 rounded-md'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 rounded-full bg-green-200 text-green-600'>
                        <svg width="25" height="25" viewBox="0 0 32 28" fill="#16a34a" xmlns="http://www.w3.org/ svg">
                            <path d="M31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 20.3195 0.538408 23.9289 0.928932C23.5384 1.3194 5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 20.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z" fill="#16a34a" />
                            <path d="M0.292891 19.2929C-0.097633 19.6834 -0.097633 20.3166 0.292891 20.7071L6.65685 27.0711C7.04738 27.4616 7.68054 27.4616 8.07107 27.0711C8.46159 26.6805 8.46159 26.0474 8.07107 25.6569L2.41421 20L8.07107 14.3431C8.46159 13.9526 8.46159 13.3195 8.07107 12.9289C7.68054 12.5384 7.04738 12.5384 6.65685 12.9289L0.292891 19.2929ZM31 19H0.999998V21H31V19Z" fill="#16a34a" />
                        </svg>
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                        <p className='capitalize text-base font-semibold'>{`${data.premiumType} ${data.month} ${data.strikePrice} ${data.options}`}</p>
                        <p className='text-gray-500 font-medium'>{formattedTradeDate}</p>
                    </div>
                </div>
                <div className='flex w-full max-md:items-center max-md:justify-between justify-end items-center gap-5'>
                    <div className='flex flex-col max-md:items-start max-md:flex-row  items-end gap-1'>
                        <p className={pl < 0 ? `text-red-500 flex items-center` : `text-green-500 flex items-center`}><span className='text-black'>&#8377;&nbsp;</span>{`${Math.abs(pl)}`}</p>
                        <div className='flex gap-2 max-md:items-start max-md:hidden items-center'>
                            <p className='text-gray-600 font-medium'>B:&nbsp;{data.buyPrice}</p>
                            <p className='text-gray-600 font-medium'>S:&nbsp;{data.sellPrice}</p>
                        </div>
                    </div>
                    <Link href={`/trade/${data._id}`} className='flex place-items-center w-[40px] h-[40px] border rounded-md p-2 bg-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.4,21.8L32.1,8.1c2.3-2.3,6-2.1,8.1,0.4c1.8,2.2,1.5,5.5-0.5,7.5l-2.8,2.8"></path><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M32.5,23.3L17.9,37.8c-0.4,0.4-0.8,0.6-1.3,0.8L6.5,41.5l2.9-10.1c0.1-0.5,0.4-0.9,0.8-1.3l3.7-3.7"></path><line x1="29.1" x2="36.9" y1="11.1" y2="18.9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></line>
                        </svg>
                    </Link>
                </div>
            </div>


        </div>
    )
}