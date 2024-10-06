"use client";
import { useState, useEffect, useRef } from "react";
import useWebSocket from "react-use-websocket";

interface InfoSectionProps {
	ipAddress: string;
}

export function LogContainer({ ipAddress }: InfoSectionProps) {
	const url = `ws://${ipAddress}:8080/ws`
	const { lastMessage } = useWebSocket(url);
	const [messageHistory, setMessageHistory] = useState("");
	const scrollRef = useRef<HTMLInputElement>(null);


	// Update message History from websocket
	useEffect(() => {
		if (lastMessage !== null) {
			setMessageHistory((message) => message + lastMessage.data);
		}

	}, [lastMessage]);

	// Keep message log scrolled at bottom after every re-render
	useEffect(() => {
		if (scrollRef.current){
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

		}
	}, [messageHistory]);

	return (
		<div className="w-11/12 h-full mx-auto py-10">
			<div
				ref={scrollRef}
				className="relative flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm whitespace-pre p-4 overflow-y-scroll text-wrap"
			>
				{messageHistory}	
			</div>

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
