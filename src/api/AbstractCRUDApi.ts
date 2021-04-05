import CRUDApi from "./interfaces/CRUDApi";
import api from "./api";
import * as querystring from "querystring";

export default abstract class AbstractCRUDApi implements CRUDApi {

    fetchAll(orderBy: string, orderWay: string): Promise<String> {
        let qs = querystring.stringify({
            sort: orderBy,
            direction: orderWay
        });
        return api.get(`${this.getBaseURL()}?${qs}`).then(res => res.data);
    }

    post(data: Object): Promise<Object>{
        return api.post(`${this.getBaseURL()}`, data).then(res => res.data);
    }
    
    abstract getBaseURL(): String;

}