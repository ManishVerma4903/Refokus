import React from 'react'

function Footer() {
  return (
    <div className='w-full '>

        <div className='max-w-screen-xl m-auto flex items-center justify-center gap-32'>

        <div className='basis-1/2'>
            <h1 className='text-white text-[11rem]'>Refokus.</h1>
        </div>

        <div className='basis-1/2 flex gap-10'>
            <div>
                <h1 className='text-zinc-700' >Socials</h1>
                {["instageam","twitter","(X?)","linkedin"].map(item=> <a className='text-sm block mt-2 text-zinc-600' href="#">{item}</a>)}
            </div>
            <div>
            <h1 className='text-zinc-700' >Sitimap</h1>
            {["home","work","career","contact"].map(item=> <a className='text-sm block mt-2 text-zinc-600' href="#">{item}</a>)}
            </div>


            <div className='basis-1/2 text-white'>
                <p >Refokus is a pioneering digital agency driven by design andempowered by technology. </p>
                <img className='mt-5'
                 src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>

        </div>
        </div>

    </div>
  )
}

export default Footer