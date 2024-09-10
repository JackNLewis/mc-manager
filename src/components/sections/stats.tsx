import StatCard from "../statcard";

export default function StatSection() {
    return (
    <div className="w-11/12 mx-auto h-full flex justify-between">
        <StatCard/>
        <StatCard/>
        <StatCard/>
        <StatCard/>
    </div>);
  }