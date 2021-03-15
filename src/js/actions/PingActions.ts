import GenericCRUDActions from "./GenericCRUDActions";
import { instance as pingAPI } from "../../api/PingAPI";

export default class PingActions extends GenericCRUDActions {
    
    constructor() {

        super("ping", pingAPI);
        
    }

}

export const actions = new PingActions();