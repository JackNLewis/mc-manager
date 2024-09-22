"use client";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InfoSectionProps {
	ipAddress: string;
}

export function LogContainer({ ipAddress }: InfoSectionProps) {
	const url = `ws://${ipAddress}:8080/ws`
	const { lastMessage } =  useWebSocket(url)
	const [messageHistory, setMessageHistory] = useState("");

	useEffect(() => {
		if (lastMessage !== null) {
			setMessageHistory(messageHistory + lastMessage.data);
		}
	}, [lastMessage]);
	
	return (
		<div className="w-11/12 h-full mx-auto py-10">
			<ScrollArea className="flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm whitespace-pre p-4">
				{messageHistory}
			</ScrollArea>
		</div>
	);
}


export function LogContainerEmpty() {
	return (
		<div className="w-11/12 h-full mx-auto py-10">
			<ScrollArea className="flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm whitespace-pre p-4">
				<p className="text-red-200">No Logs Available</p>
			</ScrollArea>
		</div>
	);
}
