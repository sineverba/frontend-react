import GenericCRUDActions from "./GenericCRUDActions";
import { instance as loginApi } from "../../api/LoginAPI";

export default class LoginActions extends GenericCRUDActions {
    
    constructor() {
        super("login", loginApi);
    }

    logout(){
        return (dispatch: Function) => dispatch({type:"LOGOUT"});
    }

    checkToken() {
        return (dispatch: Function) => dispatch({type:"CHECK_TOKEN"});
    }



}

export const actions = new LoginActions();