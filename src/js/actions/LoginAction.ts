import GenericCRUDActions from "./GenericCRUDActions";
import { instance as loginApi } from "../../api/LoginAPI";

export default class LoginAction extends GenericCRUDActions {
    
    constructor() {

        console.log("called login action")

        super("login", loginApi);
        
    }

}

export const actions = new LoginAction();