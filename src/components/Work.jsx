import React, { useState } from 'react'
import {motion,useMotionValueEvent, useScroll } from 'framer-motion'

function Work() {


    const [images,setImages] = useState([
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top :"40%",left:"50%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"46%",left:"44%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"35%",left:"56%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"50%",left:"53%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"33%",left:"40%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"55%",left:"55%" ,isActive:false},
      ])
    
      const {scrollYProgress} = useScroll();
      
      scrollYProgress.on("change",(data)=>{
        function showImage(arr){
            setImages((pre)=>
               pre.map((item,index)=>
                arr.indexOf(index) === -1
                ?({...item,isActive:false})
                :{...item,isActive:true}
               ));        

        }
        


        switch(Math.floor(data*100)){
            case 0:
                showImage([])
                break;
            case 1:
                showImage([0])

                break;
            case 2:
                    showImage([0,1])

                    break;
            case 3:
                showImage([0,1,2])

                break;
            case 4:
                showImage([0,1,2,3])
                break;
            case 7:
                showImage([0,1,2,3,4])
                break;
            case 8:
                showImage([0,1,2,3,4,5])
                break;
        }
      })

  return (
    <div className='w-full'>


    <div className='max-w-screen-xl relative  m-auto text-center '>
        <h1 className='text-[30vw] leading-none t font-medium text-white '>work</h1>
        <div className='absolute top-0 w-full h-full '>
            {images.map((item,index)=>(item.isActive && <img className='w-60 absolute -translate-x-[50%] -translate-y[50%] '  style={{top: item.top , left:item.left}}  src={item.url} alt="" />))}
        </div>
    </div>

    </div>
  )
}

export default Work
