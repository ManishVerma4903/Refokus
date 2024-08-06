import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-xl m-auto  flex  items-center justify-between p-4 ">
      <div className="nacleft flex items-center gap-12">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />

        <div className="navlinks">
          {["Home", "Work", "About", "News", "Careers"].map((item, index) => (

            <a  className="text-xs ml-10 text-white font-[satoshi]" href="#">
                {index===1 && (<span style={{boxShadow :"0 0 0.25em #00FF19"}} className="inline-block w-1 h-1 bg-green-600 rounded-full mr-1 mb-1"></span>)}
                
              {item}
            </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default Nav;
