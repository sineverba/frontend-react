import AbstractCRUDApi from "./AbstractCRUDApi";

export default class PingAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/ping";
     }
}

export const instance = new PingAPI();