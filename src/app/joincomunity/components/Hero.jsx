import React from "react";
import { FaInstagram , FaTwitter ,FaLinkedinIn } from "react-icons/fa";

const EventEngagement = () => {

  return (
    <div className=" pt-10 bg-blue-600 grad">

        <h1 className="text-4xl font-bold mb-4 text-center text-white px-3" >Maximun Engagement at Your Next Big Event </h1>
        <div className="md:px-24 py-10 px-2 ">
            <div className="border p-10 rings relative ">
                <img src="/elipse1.png" alt="" className="absolute bottom-10 z-40 w-20  " />
                <div className="rounded-full  md:w-28 bg-black md:h-16 w-16 h-16 flex justify-center items-center absolute z-40 right-10"> <FaTwitter className="md:text-4xl text-2xl text-white " /> </div>
                <div className="border p-10 rings relative  ">
                    <div className=" rounded-full md:w-28 bg-black md:h-16  w-16 h-16 flex justify-center items-center absolute z-40"> <FaInstagram className="text-4xl text-white " /> </div>
                <img src="elipse2.png" alt="" className="absolute -top-16 md:-left-20 -left-10 w-20 md:w-24" />
                <img src="elipse1.png" alt="" className="absolute left-80 -top-10 z-40 hidden md:block" />

                <div className="border p-10 rings relative">
                <img src="elipse3.png" alt="" className="absolute top-40 -right-16 z-40 w-40 hidden"/>
                <div className=" rounded-full w-28 bg-black h-16  justify-center items-center absolute z-40 top-72 left-60 hidden md:flex"> <FaLinkedinIn className="text-4xl text-white " /> </div>
                

                <div className="md:border p-10 rings relative ">

                <div className="md:border p-10 rings justify-center items-center flex relative ">
                    <button className="md:text-xl p-4 md:px-10 bg-slate-900 rounded-3xl text-white absolute w-40 md:w-60">Request to Join</button>
                    </div >
                    </div >
                    </div >
                </div >
        
            </div>
        </div>
    </div>
  );
};

export default EventEngagement;
