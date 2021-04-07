import GenericCRUDActions from "./GenericCRUDActions";
import { instance as statsAPI } from "../../api/StatsAPI";

export default class StatsActions extends GenericCRUDActions {
    
    constructor() {

        super("stats", statsAPI);
        
    }

}

export const actions = new StatsActions();