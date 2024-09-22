"use client";

import { RestartButton } from "../restartbutton";
import StatusButton from "../statusbutton";
import { ServerStatus } from "@/lib/enums";
import { SeverDetails } from "@/lib/data"

interface InfoSectionProps {
	ipAddress: string;
	serverStatus: ServerStatus;
	setDetailsCallback: (details: SeverDetails) => void;
}

export default function InfoSection({
	ipAddress,
	serverStatus,
	setDetailsCallback,
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
					{ipAddress === "" || serverStatus != ServerStatus.Running ? "" : `${ipAddress}:25565`}
				</h1>
			</div>
			<div className="flex space-x-3">
				<RestartButton />
				<StatusButton status={serverStatus} setDetailsCallback={setDetailsCallback}/> 
			</div>
		</div>
	);
}