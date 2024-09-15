"use client"
import { useState, useEffect } from 'react';
import useWebSocket  from 'react-use-websocket';
import { ScrollArea } from "@/components/ui/scroll-area"

export function LogContainer() {

    //Public API that will echo messages sent to it back to the client

    const [messageHistory, setMessageHistory] = useState("")

    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/ws");

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory(messageHistory.concat(lastMessage?.data))
        }
    }, [lastMessage]);


    return (
    <div className="w-11/12 h-full mx-auto py-10">
        <ScrollArea className="flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm whitespace-pre p-4">
            {messageHistory}
        </ScrollArea>
    </div>);
}
