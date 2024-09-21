import { Button } from "@/components/ui/button"
import { ServerStatus } from "@/lib/enums";
import { useEffect } from "react";

interface ButtonProp {
  status: ServerStatus,
  statusCallBack: (status: ServerStatus)  => void;
}

export default function StatusButton({status: serverType, statusCallBack} : ButtonProp) {
  useEffect(() => {
    console.log('use effect');
    if (shouldPoll(serverType)){
      console.log('should poll')
      const intervalId = setInterval(() => {
        
        fetch(
          "https://nunkx5xpka.execute-api.eu-west-2.amazonaws.com/default/GetMCServerDetails",
        )
          .then((response) => response.json())
          .then((data) => {           
            statusCallBack(data.status.Code);
          })
          .catch((err) => console.error(err));

      }, 2500); // Poll every 2.5 seconds
     
      return () => {
        clearInterval(intervalId);
      };
    } 
  }, [serverType]);


  return (
    <>
      {getButton(serverType, statusCallBack )}
    </>
  )
}

function shouldPoll(status : ServerStatus) : boolean{
  console.log(status);
  if (status === ServerStatus.Stopped || status === ServerStatus.Running){
    console.log(status);
    return false;
  }
  return true;
}

function getButton(serverType : ServerStatus, callback: (status: ServerStatus)  => void){
  switch (serverType){
    case ServerStatus.Stopped:
      return <Button className="bg-green-500 hover:bg-green-400" onClick={() => startServer(callback)}>Start</Button> 
    case ServerStatus.Running:
      return <Button className="bg-red-500 hover:bg-red-400" onClick={() => stopServer(callback)}>Stop</Button>; 
    default:
      return <Button variant={"secondary"}>Pending</Button>
  }
}

function startServer(callback: (status: ServerStatus) => void){
  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StartMinecraftLambda",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .then((response) => response.json())
  .then((data) => {
    callback(ServerStatus.Pending);
  })
  .catch((err) => console.error(err));
}

function stopServer(callback:  (status: ServerStatus) => void ){
  fetch(
    "https://bowmcmsdia.execute-api.eu-west-2.amazonaws.com/default/StopMinecraftServer",
    {
      headers: {
        "X-Api-Key" : "AiKYzKqqLl8rC7O7wG7GF8dgHnTGpZk0455Pf4ON",
      },
    },
  )
  .then((response) => response.json())
  .then((data) => {
    if (data.statusCode){
      callback(data.statusCode);
    }
  })
  .catch((err) => console.error(err));
}