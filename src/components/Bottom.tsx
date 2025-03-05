import React from 'react';
import Image from "next/image";

const Bottom = () => {
    return (
        <section className={` w-full h-fit px-8 py-6 grid gap-6 md:py-20 md:px-30  md:flex md:justify-between bg-[#061737]`}>
            <div className={` w-full grid gap-6 md:grid md:gap-18  md:content-between md:h-[100%] md:w-[30%]`}>
               <div className={``}>
                   <p  className={`text-[#38d1d6] font-bold text-[20px] `}>Logistics</p>
                   <ul className={`list-disc text-white`}>
                       <li>Accommodation will be provided for teams near the hacker house venue in Lagos</li>
                       <li>Meals will be provided </li>
                   </ul>
               </div>
                <div>
                    <div className="flex w-fit gap-4 md h-fit  ">
                        <Image
                            src={`/semicolon-logo.svg`}
                            width={100}
                            height={100}
                            alt="Semicolon Logo"
                        />
                        <div className={` w-[0.1rem] h-[0.5em] mt-auto mb-auto rounded-full bg-white md:w-[0.1em] md:mt-auto md:mb-auto md:h-[1.5rem] md:rounded-full md:bg-white ` }></div>
                        <Image
                            src={`/sui-logo.svg`}
                            width={40}
                            height={40}
                            alt="Sui Logo"
                        />
                    </div>
                </div>
            </div>
            <div className={` w-full md:w-[45%] grid gap-2`}>
                <p className={`text-[#38d1d6] font-bold text-[20px] `}>Resources and Support</p>
                <p className={` text-white`}>Semicolon is providing free training on Sui Move, sponsored by the Sui
                    Foundation. It isn’t too late to register for the current round of classes. Click on
                    this link to register:  <span className={`text-white underline`}>https://bit.ly/SC-SUI-Training</span></p>
                <p className={`text-white `}>Semicolon is a workforce development company that is solving the problem
                    of youth unemployment by training software engineers and techpreneurs.
                    Through our one-year techpreneurship program, we help individuals develop
                    required skills to compete as software engineers in the global market. To
                    learn more about Semicolon, please visit <span className={` underline text-white`}>www.semicolon.africa</span></p>
            </div>
        </section>
    );
};

export default Bottom;