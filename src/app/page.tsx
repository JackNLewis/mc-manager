"use client";
import InfoSection from "@/components/sections/infosection";
import StatSection from "@/components/sections/stats";
import UserSection from "@/components/sections/usersection";
import { LogContainer } from "@/components/logcontainer";
import { useState } from "react";
import { ServerStatus } from "@/lib/enums";

export default function Home() {
	const [ipAddress] = useState("199.169.1.1690129293:22556");
	const [serverStatus] = useState(ServerStatus.Stopped);
	return (
		<div className="w-screen h-screen flex">
			<div className="w-10/12 h-full">
				<div className="h-2/6">
					<InfoSection ipAddress={ipAddress} serverStatus={serverStatus} />
				</div>
				<div className="h-1/6">
					<StatSection />
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
