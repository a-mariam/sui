import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import {cabinetGrotesk400} from "@/app/font";


const Info = () => {
    return (
        <div className={` z-10 -bottom-15   md:absolute absolute  gap-4 md:-bottom-20  md:pb grid md:flex md:justify-items-center  h-fit md:h-fit py-8 px-8  md:z-10 drop-shadow-md md:drop-shadow-md w-full m-w-[60%] md:max-w-[60%]  md:bg-white rounded-md md:rounded-md`}>
            <div className={`bg-white rounded-md md:rounded-none w-full md:w-full md:justify-between gap-4 md:bg-none  grid md:flex px-8 md:px-0 py-8 md:py-0`}>
                <div className={`md:flex mt-auto mb-auto md:mt-auto md:mb-auto  w-fit flex gap-2 md:gap-2`} >
                    <FaRegCalendarAlt
                        style={{color: '#187cf4'}}
                        className={`h-8 w-8 `} />
                    <div className={` ${cabinetGrotesk400.className} text-black  md:max-w-[8rem] t `}>
                        March 24-29, 2025
                    </div>
                </div>
                <div className={`md:flex w-fit mt-auto mb-auto md:mt-auto md:mb-auto  flex gap-2 md:gap-2`} >
                    <FaLocationDot
                        style={{color: '#187cf4'}}
                        className={`h-8 w-8 `} />
                    <div className={`${cabinetGrotesk400.className} text-black md:max-w-[13rem]`}>
                        312 Herbert Macaulay, sabo, yaba, Lagos, Nigeria
                    </div>
                </div>
                <div className={`md:flex mt-auto mb-auto md:mt-auto md:mb-auto  w-fit flex gap-2 md:gap-2`} >
                    <BiSolidTimeFive
                        style={{color: '#187cf4'}}
                        className={`h-8 w-8 `} />
                    <div className={` grid w-fit h-fit text-[#6b7280]  md:grid `}>
                        Application deadline:
                        <span className={`${cabinetGrotesk400.className} text-black `}>March 12, 2025</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Info;