"use client"
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";

export function LogContainer() {

    const [message, setMessage] = useState("");
 
    useEffect(() => {
        const socket = io('localhost:8080/ws');
        socket.connect();
        socket.on("recieve_message", setMessage);
        
        return () => {
            socket.disconnect();
        }
        },[])

    return (
    <div className="w-11/12 h-full mx-auto py-10">
        <div className="flex bg-card w-full h-full rounded-lg rounded-lg border text-card-foreground shadow-sm">

        </div>
    </div>);
}
