import StatCard from "../statcard";

export default function StatSection() {
    return (
    <div className="w-11/12 mx-auto h-full flex justify-between">
        <StatCard title="Status" stat="running" subtitle="Started at 3:10"/>
        <StatCard title="Players" stat="0" subtitle="Max 10 players"/>
        <StatCard title="Runtime" stat="25hr" subtitle="Max 30 hours"/>
        <StatCard title="Cost" stat="£2.00" subtitle="From 1st August"/>
    </div>);
  }