import AbstractCRUDApi from "./AbstractCRUDApi";

export default class RefreshAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/refresh";
     }
}

export const instance = new RefreshAPI();