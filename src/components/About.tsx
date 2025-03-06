import React from 'react';
import Image from 'next/image'
import {inter600} from "@/app/font";

const About = () => {


    return (
        <div
            className={` w-full h-fit bg- pt-30 pb-10 md:py-30  md:w-full bg-white md:bg-white   md:h-fit px-6 md:px md:gap-8 md:flex md:justify-center grid gap-6`}>
            <div className={` relative grid md:w-[80%] md:flex md:justify-between  `}>
                <div className="relative w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/about-sui-image.svg"
                            alt="about sui icon"
                            width={400}
                            height={400}
                            className={`rounded-full w-96 h-96 bg-black object-cover object-center`}
                            // className="absolute w-auto h-[120%] object-cover -top-16"
                        />

                        <div
                            className="absolute top-32 left-[-12px] bg-gray-200 text-black px-4 py-1 rounded shadow-md flex items-center text-sm">
                            <span className=" text-sm text-black"></span> Web 3.0
                        </div>

                        <div
                            className="absolute bottom-8 right-0.5 bg-gray-200  text-black px-4 py-1 rounded shadow-md flex items-center text-sm">
                            <span className="text-black"></span> Blockchain Tech
                        </div>
                    </div>
                </div>







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