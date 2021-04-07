import AbstractCRUDApi from "./AbstractCRUDApi";

export default class StatsAPI extends AbstractCRUDApi {
    
    getBaseURL(): String {
        return "/stats";
     }
}

export const instance = new StatsAPI();