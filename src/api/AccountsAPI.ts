import AbstractCRUDApi from "./AbstractCRUDApi";

export default class AccountsAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/accounts";
     }
}

export const instance = new AccountsAPI();