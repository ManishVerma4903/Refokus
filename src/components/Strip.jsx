import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[16.66%] border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-100 px-4 py-3 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <h1 className='font-semibold text-white'>{val.number}</h1>
    </div>
  )
}

export default Strip