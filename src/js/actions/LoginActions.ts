import GenericCRUDActions from "./GenericCRUDActions";
import { instance as loginApi } from "../../api/LoginAPI";

export default class LoginActions extends GenericCRUDActions {
    
    constructor() {

        super("login", loginApi);
        
    }

}

export const actions = new LoginActions();