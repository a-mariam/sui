import React from 'react';
import Image from 'next/image'
import Info from "@/components/info";
import {cabinetGroteskBold} from "@/app/font";

const Top = () => {
    return (
        <div className={`w-full relative md:relative h-fit pb-10 px-6 md:px-0 gap-18 md:h-fit pt-10  md:w-full grid justify-items-center md:grid md:justify-items-center bg-[#061737] md:bg-[#061737]`}>
            <div className="flex w-fit gap-4 md h-fit  ">
                <Image
                    src={`/semicolon-logo.svg`}
                    width={150}
                    height={150}
                    alt="Semicolon Logo"
                />
                <div className={` w-[0.1rem] h-[1em] mt-auto mb-auto rounded-full bg-white md:w-[0.1em] md:mt-auto md:mb-auto md:h-[1.5rem] md:rounded-full md:bg-white ` }></div>
                <Image
                    src={`/sui-logo.svg`}
                    width={50}
                    height={50}
                    alt="Sui Logo"
                />
            </div>
            <div className={`w-full h-full md:h-fit grid md:grid pb-[45%] md:pb-[5%] justify-items-center md:justify-items-center  md:max-w-[35%] `}>
                <Image
                    src={`/HackerHouseNew.svg`}
                    width={100}
                    height={100}
                    alt="HackerHouse Logo"
                    className={` w-full h-full md:h-full md:w-full`}
                />
                <div className={` ${cabinetGroteskBold.className} text-[30px] flex text-[#71e4e6] md:text-[#71e4e6] `}>Road to sui overflow</div>
            </div>

            <Info/>
        </div>
    );
};

export default Top;