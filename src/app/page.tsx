import ProfileRow from "@/components/profilerow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <ProfileRow isOnline={true} imageUrl="https://avatars.githubusercontent.com/u/124599?v=4" name="test"/>
    </div>
  );
}
