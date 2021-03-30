import AbstractCRUDApi from "./AbstractCRUDApi";

export default class rolesAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/roles";
     }
}

export const instance = new rolesAPI();