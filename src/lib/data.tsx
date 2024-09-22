import { ServerStatus } from "./enums";

export class SeverDetails {
    ipAddress: string = "";
    status: ServerStatus = ServerStatus.Pending;
}

export async function fetchDetails() : Promise<SeverDetails>{
    const response  = await fetch(
        "https://nunkx5xpka.execute-api.eu-west-2.amazonaws.com/default/GetMCServerDetails",
      )
    const data = await response.json();
    
    const res : SeverDetails = new SeverDetails();

    if (data.ipAddress){
        res.ipAddress =  data.ipAddress;
    }

    if (data.status.Code){
        res.status = data.status.Code;
    }
    return res
}