'use client';

import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Months = ["month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export default function page() {
    const [data, setData] = useState({
        buyPrice: "",
    expiryDate: "",
    month: "",
    note: "",
    openingPrice: "",
    options: "",
    premiumType: "",
    quantity: "",
    sellPrice: "",
    stoploss: "",
    strikePrice: "",
    target: "",
    tradeDate: "",
    });
    const router = useRouter();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/data/trade', data);
            console.log(res.data);
            router.push('/book');
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='conBox mx-auto max-md:w-[380px] w-[850px] max-md:p-8 p-10 border rounded-xl overflow-y-scroll custom-scroll'>
            <h1 className='text-3xl text-center [text-shadow:_0_2px_5px_rgb(0_0_0_/_40%)] pb-4 mb-4 font-mono font-semibold'>Record Your Market Moves</h1>
            <form onSubmit={handleSubmit} className='mb-12 '>
                <p className='text-xl mb-2 border-b pb-2'>Day details:</p>
                <div className='py-2'>
                    <div className='flex gap-3 max-md:gap-1 pb-4 '>
                        <div className='w-1/2'>
                            <p className='text-md mb-2'>Trade Date : </p>
                            <input type="date" name="tradeDate" onChange={handleChange} className="border px-2 py-1 rounded-md w-full" required />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-md mb-2'>Expiry Date : </p>
                            <input type="date" name="expiryDate" onChange={handleChange} className="border px-2 py-1 rounded-md w-full" required />
                        </div>
                    </div>
                    <div className='flex gap-3 max-md:gap-1 pb-4 '>
                        <input type='number' name='openingPrice' onChange={handleChange} placeholder='Opening Strike Price' className='border px-2 py-1 rounded-md w-full' />
                    </div>
                </div>
                <p className=' text-xl mb-2 border-b pb-2 '>Trade details</p>
                <div className='p-2'>
                    <p className='text-md mb-2 flex justify-between'><span>Premium :</span><span className='text-gray-400 capitalize'>{`${data.premiumType} ${data.month} ${data.strikePrice} ${data.options}`}</span> </p>
                    <div className='flex gap-4 pb-4 flex-wrap'>
                        <div>
                            <select name='premiumType' onChange={handleChange} className='border py-1 px-2 rounded-md' required>
                                <option value=''>premiumType</option>
                                <option value='nifty'>Nifty</option>
                                <option value='banknifty'>Banknifty</option>
                                <option value='equity'>Equity</option>
                            </select>
                        </div>
                        <div>
                            <select name="month" onChange={handleChange} className="border px-2 py-1 rounded-md" required>
                                {Months.map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input type="number" name="strikePrice" onChange={handleChange} placeholder="Strike Price" className="border px-2 py-1 rounded-md" required />
                        </div>
                        <div>
                            <select name="options" onChange={handleChange} className="border px-2 py-1 rounded-md" required>
                                <option value=''>options</option>
                                <option value="CE">CE</option>
                                <option value="PE">PE</option>
                            </select>
                        </div>

                    </div>
                    <p className='text-md mb-2 '>Prices :</p>
                    <div className='flex gap-4 flex-col'>
                        <div className='flex max-md:flex-col justify-center gap-4 w-full'>
                            <div className='max-md:w-full w-1/2'>
                                <input type='number' name='buyPrice' onChange={handleChange} placeholder='Entry' className='border px-4 py-1 rounded-md w-full' />
                            </div>
                            <div className='max-md:w-full w-1/2'>
                                <input type='number' name='sellPrice' onChange={handleChange} placeholder='Exit' className='border px-4 py-1 rounded-md w-full' />
                            </div>
                        </div>
                        <div className='flex max-md:flex-col justify-center gap-4 w-full pb-4'>
                            <div className='max-md:w-full w-1/3'>
                                <input type='number' name='target' onChange={handleChange} placeholder='target' className='border px-4 py-1 rounded-md w-full' />
                            </div>
                            <div className='max-md:w-full w-1/3'>
                                <input type='number' name='stoploss' onChange={handleChange} placeholder='stoploss' className='border px-4 py-1 rounded-md w-full' />
                            </div>
                            <div className='max-md:w-full w-1/3'>
                                <input type='number' name='quantity' onChange={handleChange} placeholder='quantity' className='border px-4 py-1 rounded-md w-full' />
                            </div>
                        </div>
                    </div>
                </div>

                <p className='text-xl mb-4 border-b pb-2'>Note :</p>
                <div>
                    <textarea name='note' onChange={handleChange} className='border p-2 rounded-md w-full' placeholder='Note'></textarea>
                </div>
                <div className='flex justify-center items-center p-6 border rounded-md border-dashed '>
                
                </div>


                <button className='bg-black text-white p-3 w-full rounded-md mt-5 mb-4' type='submit'>Submit</button>
            </form>
        </div>
    )
}
