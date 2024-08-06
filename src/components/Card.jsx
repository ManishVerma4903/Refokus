import React from 'react'
import Cards from './Cards'

function Card() {
  return (
    <div className='max-w-screen-xl m-auto  gap-2 flex items-center justify-center mt-48'>
        <Cards width={"basis-1/3"} start={false} para={true}/>
        <Cards width={"basis-2/3"} start={true} para={false} hover={true}/>
    </div>
  )
}

export default Card