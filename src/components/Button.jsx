import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";
function Button({title = "Start a Project "}) {
  return (
  <button className='w-40 bg-white rounded-full px-4 py-2 flex items-center justify-between text-sm gap-4'><span>{title}</span><MdSubdirectoryArrowRight/></button>
)
}

export default Button


