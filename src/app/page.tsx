"use client";
import InfoSection from "@/components/sections/infosection";
import StatSection from "@/components/sections/stats";
import { LogContainer } from "@/components/logcontainer";
import { useEffect, useState } from "react";
import { ServerStatus } from "@/lib/enums";

export default function Home() {
	const [ipAddress, setIPAddress] = useState("");
	const [serverStatus, setServerStatus] = useState(ServerStatus.Stopped);

	useEffect(() => {
		fetch(
			"https://nunkx5xpka.execute-api.eu-west-2.amazonaws.com/default/GetMCServerDetails",
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.ipAddress != null) {
					setIPAddress(data.ipAddress);
				}
				switch (data.status.Code) {
					case 80: // stopped
						setServerStatus(ServerStatus.Stopped);
						break;
					case 16:
						setServerStatus(ServerStatus.Running);
						break;
				}
				setServerStatus(data.status.Code);
			})
			.catch((err) => console.error(err));
	});

	return (
		<div className="w-screen h-screen flex">
			<div className="w-10/12 h-full">
				<div className="h-2/6">
					<InfoSection ipAddress={ipAddress} serverStatus={serverStatus} statusCallBack={(status: ServerStatus) => setServerStatus(status)} />
				</div>
				<div className="h-1/6">
					<StatSection />
				</div>
				<div className="h-3/6"><LogContainer /></div>
			</div>
			<div className="w-2/12 h-full">
				{/* <UserSection /> */}
			</div>
		</div>
	);
}
