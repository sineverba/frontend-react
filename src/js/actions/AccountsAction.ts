import GenericCRUDActions from "./GenericCRUDActions";
import { instance as accountsAPI } from "../../api/AccountsAPI";

export default class AccountsAction extends GenericCRUDActions {
    
    constructor() {

        super("accounts", accountsAPI);
        
    }

}

export const actions = new AccountsAction();