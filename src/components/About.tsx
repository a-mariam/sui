import React from 'react';
import Image from 'next/image'
import {inter600} from "@/app/font";

const About = () => {


    return (
        <div
            className={` w-full h-fit bg- pt-30 pb-10 md:py-30  md:w-full bg-white md:bg-white   md:h-fit px-6 md:px md:gap-8 md:flex md:justify-center grid gap-6`}>
            <div className={`grid md:w-[80%] md:flex md:justify-between  `}>

                {/*<div className={`static w-fit  h-fit bg-red-100 `}>*/}
                {/*   <div className="absolute top-2 left-20 py-1 px-3 bg-[#ececec] text-[#061737] rounded-md text-xs font-bold z-50">*/}
                {/*      Web 3.0*/}
                {/*    </div>*/}
                {/*    <div className="relative w-full max-w-[350px] aspect-square overflow-hidden rounded-full bg-[#0A1739]">*/}
                {/*        <Image*/}
                {/*            src="/about-sui-image.svg"*/}
                {/*            alt="Smiling woman with laptop"*/}
                {/*            layout="fill"*/}
                {/*            objectFit="cover"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="absolute bottom-2 right-20 py-1 px-3 bg-[#ececec] text-[#061737] rounded-md text-xs font-bold z-50">*/}
                {/*        Blockchain Tech*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div className="= h-fit w-fit bg-red-100 ">*/}
                    {/* Top Label ("Web 3.0") */}


                    {/* Circular Image */}
                    <div className=" relative w-full max-w-[350px] aspect-square overflow-hidden rounded-full bg-[#0A1739]">
                        <div className="  absolute rounded-xl bg-[#ECECEC] p-2 shadow-lg z-50">
                            <p className="text-sm font-medium text-gray-800">Web 3.0</p>
                        </div>
                        <Image
                            alt="Smiling woman with laptop"
                            src="/about-sui-image.svg"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        {/*<div className="abssm: rounded-xl bg-[#ECECEC] p-2 shadow-lg">*/}
                        {/*    <p className="text-sm font-medium text-gray-800">Blockchain Tech</p>*/}
                        {/*</div>*/}
                    </div>

                    {/* Bottom Label ("Blockchain Tech") */}
                    {/*<div className="abssm: rounded-xl bg-[#ECECEC] p-2 shadow-lg">*/}
                    {/*    <p className="text-sm font-medium text-gray-800">Blockchain Tech</p>*/}
                    {/*</div>*/}
                {/*</div>*/}



                <div className={` grid md:grid w-full  h-fit gap-4  md:max-w-[50%] `}>
                    <div className={`${inter600.className} text-[#187cf4] text-[24px] `}>About Sui Lagos Hacker House
                    </div>
                    <div className={`grid md:grid gap-4 text-base text-black`}>
                        <p className={`  text-sm`}>
                            <b className={`text-[#2c6cba] `}>Sui Lagos Hacker House </b>
                            is a 6-day event that is designed to bring together developers, engineers, builders,
                            innovators, and blockchain enthusiasts who are interested in building on the <b
                            className={` `}>Sui blockchain.</b>
                        </p>

                        <p className={`  text-sm`}>
                            The event will feature workshops, mentorship and coaching sessions, hacking, and networking
                            opportunities to encourage innovation and collaboration. Attendees will learn about the Sui
                            blockchain, develop skills to build robust solutions using Sui and prepare for the <b
                            className={`underline text-[#187cf4]`}>Sui Overflow 2023 Hackathon,</b> a global competition
                            with over $500,000 in combined prizes.
                        </p>
                        <div className={`text-sm`}>
                            The Sui Lagos Hacker House is implemented by <b className={` underline`}> Semicolon</b> and
                            sponsored by <b className={` underline`}>Sui Foundation.</b>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;