"use client";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InfoSectionProps {
	ipAddress: string;
}

export function LogContainer({ ipAddress }: InfoSectionProps) {
	//Public API that will echo messages sent to it back to the client

	const [messageHistory, setMessageHistory] = useState("");


	

	useEffect(() => {
		if (ipAddress){
			const { lastMessage } = useWebSocket(`ws://${"18.133.229.253:8080"}/ws`);

			if (lastMessage !== null) {
				setMessageHistory(messageHistory.concat(lastMessage?.data));
			}
		}
		
	}, [messageHistory]);
	

	return (
		<div className="w-11/12 h-full mx-auto py-10">
			<ScrollArea className="flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm whitespace-pre p-4">
				{messageHistory}
			</ScrollArea>
		</div>
	);
}
