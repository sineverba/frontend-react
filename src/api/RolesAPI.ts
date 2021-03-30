import AbstractCRUDApi from "./AbstractCRUDApi";

export default class RolesAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/roles";
     }
}

export const instance = new RolesAPI();