"use client";
import InfoSection from "@/components/sections/infosection";
import StatSection from "@/components/sections/stats";
import { LogContainer, LogContainerEmpty } from "@/components/logcontainer";
import { useEffect, useState } from "react";
import { ServerStatus } from "@/lib/enums";
import { fetchDetails, SeverDetails } from "@/lib/data";

export default function Home() {
	const [ipAddress, setIPAddress] = useState("");
	const [serverStatus, setServerStatus] = useState(ServerStatus.Pending);

	useEffect(() => {
		const fetchData = async () => {
			await fetchDetails().then((data) => {
				setDetails(data);
			});
		};

		fetchData();
	});

	function setDetails(details: SeverDetails) {
		if (details.status !== serverStatus) {
			setServerStatus(details.status);
		}

		if (details.ipAddress !== ipAddress) {
			setIPAddress(details.ipAddress);
		}
	}

	return (
		<div className="w-screen h-screen flex">
			<div className="w-10/12 h-full">
				<div className="h-2/6">
					<InfoSection
						ipAddress={ipAddress}
						serverStatus={serverStatus}
						setDetailsCallback={(details: SeverDetails) => setDetails(details)}
					/>
				</div>
				<div className="h-1/6">
					<StatSection />
				</div>
				<div className="h-3/6">
					{ipAddress && serverStatus == ServerStatus.Running ? (
						<LogContainer ipAddress={ipAddress} />
					) : (
						<LogContainerEmpty />
					)}
				</div>
			</div>
			<div className="w-2/12 h-full">{/* <UserSection /> */}</div>
		</div>
	);
}
