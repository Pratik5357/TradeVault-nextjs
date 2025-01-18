
export default function Skeleton() {
  return (
    <div>
      <div className='flex flex-col gap-3 w-full border p-1 rounded-md border-gray-200 animate-pulse'>
                <div className='flex max-md:flex-col max-md:p2 max-md:items-start gap-5 items-center justify-between p-4 rounded-md'>
                  <div className='flex gap-3 items-center'>
                    <div className='p-2 rounded-full bg-gray-300 w-[40px] h-[40px]' />
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='bg-gray-300 h-4 w-32 rounded-md'></div>
                      <div className='bg-gray-200 h-3 w-24 rounded-md'></div>
                    </div>
                  </div>
                  <div className='flex w-full max-md:items-center max-md:justify-between justify-end items-center gap-5'>
                    <div className='flex flex-col max-md:items-start max-md:flex-row items-end gap-1'>
                      <div className='bg-gray-300 h-4 w-16 rounded-md'></div>
                      <div className='flex gap-2 max-md:items-start max-md:hidden items-center'>
                        <div className='bg-gray-200 h-3 w-12 rounded-md'></div>
                        <div className='bg-gray-200 h-3 w-12 rounded-md'></div>
                      </div>
                    </div>
                    <div className='w-[40px] h-[40px] bg-gray-300 rounded-md'></div>
                  </div>
                </div>
              </div>
    </div>
  )
}
