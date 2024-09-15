"use client";

import { RestartButton } from "../restartbutton";
import { StartButton } from "../startbutton";
import { StopButton } from "../stopbutton";
import { ServerStatus } from "@/lib/enums";

interface InfoSectionProps {
	ipAddress: string;
	serverStatus: ServerStatus;
}

export default function InfoSection({
	ipAddress,
	serverStatus,
}: InfoSectionProps) {
	return (
		<div className="w-11/12 h-full mx-auto flex flex-col justify-between py-10">
			<div className="flex flex-col space-y-2">
				<h1 className="font-light text-primary text-slate-500	">Server:</h1>
				<h1 className="font-bold text-2xl text-opacity-75 text-black">
					Sunday Sesh
				</h1>
				<h1 className="font-light text-primary text-slate-500	">Address:</h1>
				<h1 className="font-bold text-2xl text-opacity-75 text-black">
					{ipAddress}
				</h1>
			</div>
			<div className="flex space-x-3">
				<RestartButton />
				{getButton(serverStatus)}
			</div>
		</div>
	);
}

function getButton(status: ServerStatus) {
	switch (status) {
		case ServerStatus.Running:
			return <StopButton />;
		case ServerStatus.Stopped:
			return <StartButton />;
	}
}
