'use client';

import Skeleton from '@/components/Skeleton';
import TradePreview from '@/components/TradePreview';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupedData, setGroupedData] = useState({});

  const sendRequest = async () => {
    try {
      const res = await fetch('https://trade-vault-nextjs.vercel.app/api/data/book');
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await res.json();
      setData(responseData.message || []); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setData([]); // Set to empty array on error
    } finally {
      setLoading(false); // Always stop loading
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const grouped = data.reduce((acc, item) => {
        const month = item.month || "Unknown"; // Handle missing or undefined month
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(item);
        return acc;
      }, {});
      setGroupedData(grouped);
    } else {
      setGroupedData({}); // Clear grouped data if no valid data is present
    }
  }, [data]);

  // Define the order of months
  const monthOrder = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="conBox mx-auto max-md:w-[380px] w-[850px] p-6 border rounded-xl">
      <h1 className="text-3xl pb-4 font-semibold mb-4 text-center">Market Log</h1>
      <div className='flex gap-3 max-md:gap-1 pb-4 '>

      </div>
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className='flex flex-col gap-3'>
          <Skeleton />
          <Skeleton />
          </div>
           // Show loading text or spinner while fetching data
        ) : (
          Object.keys(groupedData)
            .sort((a, b) => {
              // Sort by month order
              const indexA = monthOrder.indexOf(a);
              const indexB = monthOrder.indexOf(b);
              return indexA - indexB;
            })
            .map((month) => (
              <div key={month}>
                <h2 className="text-xl mb-4 capitalize">{month}</h2>
                <div className="flex flex-col gap-4">
                  {groupedData[month].map((item, index) => (
                    <TradePreview key={index} data={item} />
                  ))}
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}