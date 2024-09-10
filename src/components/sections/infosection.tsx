import { StartButton } from "../startbutton";

export default function InfoSection() {
  return (
  <div className="w-11/12 h-full mx-auto flex flex-col justify-between py-10">
    <div>
      <h1 className="font-light text-opacity-75 text-black">Server:</h1>
      <h1 className="font-bold text-2xl text-opacity-75 text-black">Sunday Sesh</h1>
      <h1>Address:</h1>
      <h1 className="font-bold text-2xl text-opacity-75 text-black">199.168.1.168:22566</h1>
    </div>
    <div className="flex space-x-3">
      <StartButton />
      <StartButton />
    </div>
  </div>)
}