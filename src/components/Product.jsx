import React from "react";
import Button from "./Button";

function Product({ pro, mover, count }) {
  return (
    <div className="w-full h-[17rem] ">

      <div onMouseMove={()=>mover(count)} className="flex items-center justify-between px-20 ">
        <h1 className="text-5xl font-semibold text-white">{pro.title}</h1>

        <div className=" detl w-1/4 mr-20">
          <p className="text-white leading-7 mb-5 text-base">
            {pro.discription}
          </p>
          <div className="flex items-center  gap-5">
            {pro.live && <Button title={"Live Website"} />}
            {pro.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
