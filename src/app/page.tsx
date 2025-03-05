import Image from "next/image";
import Top from "@/components/Top";
import About from "@/components/About";
import FeatureAndBenefits from "@/components/FeatureAndBenefits";
import Criteria from "@/components/Criteria";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <div
        className={` w-screen h-screen md:h-screen md:w-screen bg-white md:bg-white`}
    >
      <Top/>
      <About/>
      <FeatureAndBenefits/>
      <Criteria/>
      <Bottom/>
    </div>
  );
}
