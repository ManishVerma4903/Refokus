import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbBackground } from "react-icons/tb";

function Cards({ width, start, para, hover ="false" }) {
  return (
    
    <motion.div whileHover={{backgroundColor : hover=== true &&"#7443ff" }}
      className={`p-5 bg-zinc-700 h-[25rem] ${width}     rounded-xl text-white`}
    >
        <motion.div whileHover={{padding:"10px"}} className="flex flex-col justify-between h-full ">
        <div className="flex items-center justify-between">
          <h3>one heading</h3>
          <FaArrowRightLong />
        </div>
        <div >
          {start && (
            <>
              <h1 className="text-8xl font-[satoshi]">Start a Project</h1>
              <button className=" mt-5 px-5 py-2 rounded-full border-[1px] border-zinc-200 text-base">
                Contact us
              </button>
            </>
          )}
          {para && <p>Lorem ipsum dolor sit amet.</p>}
        </div>
      
        </motion.div>
        
      
        
        
    </motion.div>
  );
}

export default Cards;
