import React from 'react';

const FeatureAndBenefits = () => {
    return (
        <div className={` w-full h-fit bg-[#ebf2ff]  grid md:flex `}>
            <div className={` w-full md:w-[50%] md:pt-20 py-10 md:px-20 px-10 md:grid md:place-items-center h-fit bg-[#ebf2ff] `}>
               <div className={` pb-5 text-[20px]`}>
                   <p className={` text-[#2584f4] pb-5 font-bold `}>Features of the Hacker House</p>
                   <ul className={` text-black font-normal list-disc break-all text-base space-y-1 `}>
                       <li >Brain storming and idea sessions</li>
                       <li >Workshops and tutorials</li>
                       <li >Coaching and mentorship from Move
                           <span className={' md:block'}>
                            Experts, including the sui Foundation&apos;s
                        </span>
                           <span
                               className="md:block"> Head of Developer Relations</span></li>
                       <li>Access to resources</li>
                       <li >Networking Opportunities</li>
                       <li>Solution Demonstrations</li>
                   </ul>
               </div>

            </div>
            <div className={` w-full md:w-[50%] md:pt-20 py-10 md:px-20 px-10 h-fit bg-[#f6faff] `}>
                <div className={`  text-[20px] h-fit w-fit md:grid md  `}>
                    <p className={`text-[#2584f4] pb-5 text-[20px]  font-bold `}>Benefits of Participating Teams</p>
                    <ul className={` text-black font-normal list-disc break-all text-base  space-y-1 `}>
                        <li >Access Mentorship & coaching</li>
                        <li >Engage with the Sui Foundation</li>
                        <li>Hands-On Learning</li>
                        <li >Strengthen solutions that can be used to compete
                            <span className={' md:block'}>
                            in global Hackathons, enter accelerator programs,
                        </span>
                            <span
                                className="md:block">and become viable business </span></li>
                        <li >Showcase your skills </li>
                        <li>Connect with other developers & potential
                            <span className={` md:block`}>mentors and partners</span>
                        </li>
                        <li>All participants who successfully complete the
                        <span className={`md:block`}>Hacker House are eligible for a reward worth the</span>
                            <span className="md:block" >equivalent of $100</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureAndBenefits;