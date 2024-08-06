import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    const products = [
    {title:"Arqitel" , discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." ,live : true , case : false},
    {title:"Cula" , discription:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." ,live : true , case : false},
    {title:"TTR" , discription:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design" ,live : true , case : false},
    {title:"Maniv" , discription:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods." ,live : true , case : true},
    {title:"Yahoo!" , discription:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop." ,live : true , case : true},
    ]

    const [pos,setPos ] = useState(0);

    const mover = (val)=>{
      setPos(val*17);
    }
    


  return (
    <div className='mt-20 relative '>
        {products.map((item,index)=> <Product pro={item} mover={mover } count={index} />)}

        <div className='absolute top-0 w-full h-full pointer-events-none'>

          <motion.div 
          initial = {{y:pos , x:"50%"}}
          animate={{y:pos +`rem`}}
          transition={{ease:[0.76, 0, 0.24 ,1], duration:0.6 }}
          className='window absolute  w-[22rem] h-[17rem] left-[20%]   overflow-hidden '>
            <motion.div animate={{y:-pos +`rem`}} transition={{ease:[0.76, 0, 0.24 ,1], duration:0.5 } } className='w-full h-full'>
          <video  className='rounded-xl' muted loop autoPlay src="/videos/Arqitel.webm"></video>
              </motion.div> 
            <motion.div animate={{y:-pos +`rem`}} transition={{ease:[0.76, 0, 0.24 ,1], duration:0.5 } } className='w-full h-full '>
            <video className='rounded-xl'  muted loop autoPlay src="/videos/Cula.mp4"></video>
              </motion.div> 
            <motion.div animate={{y:-pos +`rem`}} transition={{ease:[0.76, 0, 0.24 ,1], duration:0.5 } } className='w-full h-full '>
            <video  className='rounded-xl' muted loop autoPlay src="/videos/Maniv.mp4"></video>
              </motion.div> 
            <motion.div animate={{y:-pos +`rem`}} transition={{ease:[0.76, 0, 0.24 ,1], duration:0.5 } } className='w-full h-full'>
            <video className='rounded-xl'  muted loop autoPlay src="/videos/TTR.webm"></video>
              </motion.div> 
            <motion.div animate={{y:-pos +`rem`}} transition={{ease:[0.76, 0, 0.24 ,1], duration:0.5 } } className='w-full h-full '>
            <video  className='rounded-xl' muted loop autoPlay src="/videos/yahoo.webm"></video>
            </motion.div> 


          </motion.div>

        </div>
        
    </div>
  )
}

export default Products