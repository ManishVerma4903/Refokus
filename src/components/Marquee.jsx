import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageurls,direction}) {
    

    return (
        
        <div className='flex w-full   overflow-hidden'>

          <motion.div  initial={{x: direction === "left" ? "0" :"-100%"}} animate={{x:direction === "left" ? "-100%" :"0"}}  transition={{ease:"linear" , duration:25, repeat: Infinity}} className='flex flex-shrink-0 gap-20 py-8 '>

            {imageurls.map(item => <img src={item.url} />)}
          </motion.div>
          <motion.div  initial={{x: direction === "left" ? "0" :"-100%"}} animate={{x:direction === "left" ? "-100%" :"0"}}  transition={{ease:"linear" , duration:25, repeat: Infinity}} className='flex flex-shrink-0 gap-20 py-8 ml-16'>

            {imageurls.map(item => <img src={item.url} />)}
          </motion.div>

      
          
          
    </div>
  )
}

export default Marquee



