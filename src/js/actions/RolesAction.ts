import GenericCRUDActions from "./GenericCRUDActions";
import { instance as rolesAPI } from "../../api/rolesAPI";

export default class RolesActions extends GenericCRUDActions {
    
    constructor() {

        super("roles", rolesAPI);
        
    }

}

export const actions = new RolesActions();