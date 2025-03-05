import React from 'react';
import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";


const Criteria = () => {
    return (
        <div className={`pt-20  bg-[#f6f6f6]`}>
            <section className="mx-auto max-w-6xl px-4 py-8 my-8">
                <div className="relative rounded-xl bg-[#0A1739] overflow-hidden md:overflow-visible">
                    <div className="grid md:grid-cols-2 items-center relative">
                        <div className="p-16 z-10  h-fit w-fit relative"><h3
                            className="pb-2 text-xl font-bold text-[#38d1d6]">Eligibility Criteria</h3>
                            <ul className="space-y-1 py-4">
                                <li className="text-white"><span
                                    className="font-semibold text-[#38d1d6]">Team Size:</span> Between 2 to 4 members
                                </li>
                                <li className={`text-white`}>
                                    <span className={`font-semibold text-[#38d1d6]`}>Age:</span>
                                     18+ years old
                                </li>
                                <li className="text-white"><span
                                    className="font-semibold text-[#38d1d6]">Participants:</span> Open to developers,
                                    designers, entrepreneurs, and blockchain enthusiasts
                                </li>
                            </ul>
                        </div>
                        <div className="relative md:static"><img alt="Team members smiling" loading="lazy" width="500"
                                                                 height="350" decoding="async" data-nimg="1"
                                                                 className="w-full h-auto md:hidden"

                                                                 src="/eligibility-image.svg"/><img
                            alt="Team members smiling" loading="lazy" width="600" height="450" decoding="async"
                            data-nimg="1"
                            className="hidden md:block absolute lg:-top-12 md:-top-0 md:right-0 md:translate-x-10 md:-translate-y-12"
                            src="/eligibility-image.svg"/></div>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-6xl px-4 py-8">
                <div className="grid gap-8 md:gap-16 md:grid-cols-2">
                    <div className="relative h-[300px] w-full overflow-hidden rounded-xl"><img
                        alt="Workspace with laptop" loading="lazy" decoding="async" data-nimg="fill"
                        className="object-cover"
                        src="/participation-requirement-image.png"/></div>
                    <div className="space-y-4"><h3 className="mb-6 text-3xl font-bold text-blue-600">Participation
                        Requirements</h3>
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓
                            </div>
                            <p>Teams must be physically present at the venue in Lagos throughout the duration of the
                                hacker house (March 24-29).</p></div>
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓
                            </div>
                            <p>Teams should ensure they can be fully engaged and attentive to their projects throughout
                                the period.</p></div>
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓
                            </div>
                            <p>All participants will be required to adhere to the event guidelines and code of
                                conduct.</p></div>
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓
                            </div>
                            <p>Intellectual property created by teams during the hacker house will be retained by those
                                teams.</p></div>
                    </div>
                </div>
            </section>
            <section className={` py-20`}>
                <div className="flex justify-center items-center h-[10rem] gap-8 p-10 bg-[#EBF3FF]">
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-64">
                        <div className="text-sky-500 text-4xl mb-4">
                            <IoPerson />
                        </div>
                        <p className="text-gray-600">To apply as a <strong>Individual</strong>, click here</p>
                        <button
                            className="mt-4 px-6 py-2 cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">Individual
                            <span className="text-lg">→</span></button>
                    </div>
                    <div className="bg-white p-6 h-fit rounded-2xl shadow-lg flex flex-col items-center text-center w-64">
                        <div className="text-sky-500 text-4xl mb-4">
                            <IoIosPeople />
                        </div>
                        <p className="text-gray-600">To apply as a <strong>Team</strong>, click here</p>
                        <button
                            className="mt-4 px-6 py-2 cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">Team
                            <span className="text-lg">→</span></button>
                    </div>
                </div>
                <div className="mt-6 grid py-8 place-content-center"><h1>We will inform applicants if they were selected
                    by <span className="font-semibold text-sm ">Monday, March 17, 2025.</span></h1></div>
            </section>
        </div>
    );
};

export default Criteria;