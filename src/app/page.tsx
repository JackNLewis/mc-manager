import ProfileRow from "@/components/profilerow";
import { StartButton } from "@/components/startbutton";
import Image from "next/image";
import Stat from "@/components/statcard";
import InfoSection from "@/components/sections/infosection";
import StatSection from "@/components/sections/stats";
import UserSection from "@/components/sections/usersection";
import { LogContainer } from "@/components/logcontainer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-10/12 h-full">
        <div className="h-2/6">
          <InfoSection/>
        </div>
        <div className="h-1/6">
           <StatSection/>
        </div>
        <div className="h-3/6">
          <LogContainer />
        </div>
      </div>
      <div className="w-2/12 h-full"> 
        <UserSection />
      </div>
    </div>
  );
}