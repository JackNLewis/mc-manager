import { Button } from "@/components/ui/button"
import { ServerStatus } from "@/lib/enums";
import { useEffect, useState } from "react";
import { SeverDetails, fetchDetails } from "@/lib/data"

interface ButtonProp {
  status: ServerStatus,
  setDetailsCallback: (details: SeverDetails) => void;
}

export default function StatusButton({status: serverType, setDetailsCallback} : ButtonProp) {
  const [hasRequestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (shouldPoll(serverType) || hasRequestSent){
      const intervalId = setInterval(() => {
        
        const fetchData = async () => {
          const details = await fetchDetails();
          if (details.status == ServerStatus.Running || details.status == ServerStatus.Stopped){
            setRequestSent(false);
          }
          setDetailsCallback(details);
        }
        fetchData();

      }, 2500); // Poll every 2.5 seconds
     
      return () => {
        clearInterval(intervalId);
      };
    } 
  }, [serverType, hasRequestSent]);


  return (
    <>
      {getButton(serverType,hasRequestSent,  setRequestSent)}
    </>
  )
}

function shouldPoll(status : ServerStatus) : boolean{
  if (status === ServerStatus.Stopped || status === ServerStatus.Running){
    return false;
  }
  return true;
}

function getButton(serverType : ServerStatus, hasRequestSent: boolean, setRequestSent: (hasSent: boolean) => void){
  switch (serverType){
    case ServerStatus.Stopped:
      return <Button className="bg-green-500 hover:bg-green-400" onClick={() => startServer(setRequestSent)} disabled={hasRequestSent}>Start</Button> 
    case ServerStatus.Running:
      return <Button className="bg-red-500 hover:bg-red-400" onClick={() => stopServer(setRequestSent)} disabled={hasRequestSent}>Stop</Button>; 
    default:
      return <Button variant={"secondary"}>Pending</Button>
  }
}

function startServer(setRequestSent: (hasSent: boolean) => void){
  setRequestSent(true);
  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StartMinecraftLambda",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .catch((err) => console.error(err));
}

function stopServer(setRequestSent: (hasSent: boolean) => void ){
  setRequestSent(true);
  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StopMinecraftServer",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .catch((err) => console.error(err));
}