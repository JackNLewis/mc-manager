import { Button } from "@/components/ui/button"
import { ServerStatus } from "@/lib/enums";

interface ButtonProp {
  serverType: ServerStatus,
  statusCallBack: (status: ServerStatus)  => void;
}

export default function StatusButton({serverType, statusCallBack} : ButtonProp) {
  return (
    <>
      {getButton(serverType, statusCallBack )}
    </>
  )
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
    console.log(data)
    if (data.statusCode){
      callback(data.statusCode);
    }
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
    callback(data.code)
    })
    .catch((err) => console.error(err));
}