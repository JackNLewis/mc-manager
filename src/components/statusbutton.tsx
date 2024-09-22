import { Button } from "@/components/ui/button"
import { ServerStatus } from "@/lib/enums";
import { useEffect } from "react";
import { SeverDetails, fetchDetails } from "@/lib/data"

interface ButtonProp {
  status: ServerStatus,
  setDetailsCallback: (details: SeverDetails) => void;
}

export default function StatusButton({status: serverType, setDetailsCallback} : ButtonProp) {
  useEffect(() => {
    if (shouldPoll(serverType)){
      const intervalId = setInterval(() => {
        
        const fetchData = async () => {
          // const details = await fetchDetails();
          // setDetailsCallback(details);
        }
        fetchData();

      }, 2500); // Poll every 2.5 seconds
     
      return () => {
        clearInterval(intervalId);
      };
    } 
  }, [serverType]);


  return (
    <>
      {getButton(serverType, setDetailsCallback)}
    </>
  )
}

function shouldPoll(status : ServerStatus) : boolean{
  if (status === ServerStatus.Stopped || status === ServerStatus.Running){
    return false;
  }
  return true;
}

function getButton(serverType : ServerStatus, callback: (details: SeverDetails) => void){
  switch (serverType){
    case ServerStatus.Stopped:
      return <Button className="bg-green-500 hover:bg-green-400" onClick={() => startServer(callback)}>Start</Button> 
    case ServerStatus.Running:
      return <Button className="bg-red-500 hover:bg-red-400" onClick={() => stopServer(callback)}>Stop</Button>; 
    default:
      return <Button variant={"secondary"}>Pending</Button>
  }
}

function startServer(setDetailsCallback: (details: SeverDetails) => void){
  let details: SeverDetails = new SeverDetails();
  details.status = ServerStatus.Pending;
  setDetailsCallback(details);

  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StartMinecraftLambda",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .then((response) => {
    if (!response.ok){
      details.status = ServerStatus.Stopped;
    }
    setDetailsCallback(details);
  })
  .catch((err) => console.error(err));
}

function stopServer(setDetailsCallback: (details: SeverDetails) => void ){
  let details: SeverDetails = new SeverDetails();
  details.status = ServerStatus.Pending;
  setDetailsCallback(details);

  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StopMinecraftServer",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .then((response) => {
    if (!response.ok){
      details.status = ServerStatus.Stopped;
    }
    setDetailsCallback(details);
  })
  .catch((err) => console.error(err));
}