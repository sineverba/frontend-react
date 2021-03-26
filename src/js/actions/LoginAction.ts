import GenericCRUDActions from "./GenericCRUDActions";
import { instance as loginApi } from "../../api/LoginAPI";

export default class LoginAction extends GenericCRUDActions {
    
    constructor() {

        super("login", loginApi);
        
    }

}

export const actions = new LoginAction();