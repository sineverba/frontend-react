import AbstractCRUDApi from "./AbstractCRUDApi";

export default class LoginAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/login";
     }
}

export const instance = new LoginAPI();