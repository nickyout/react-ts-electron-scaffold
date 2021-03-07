import { IApi } from "../../Types/IApi";
import { IMediator } from "../../Types/IMediator";
import { ResponseModel } from "../../Types/ResponseModel";

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any).api as IApi).sendAndReceive;

/**
 * FrontendMediator
 * This object is used for all communication with the backend.
 */
export const FrontendMediator : IMediator  = {
    listDrives: async(): Promise<ResponseModel<any>> => {
        return await sendAndReceive("listDrives");
    }
};