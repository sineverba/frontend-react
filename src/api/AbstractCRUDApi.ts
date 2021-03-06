import CRUDApi from "./interfaces/CRUDApi";
import api from "./api";
import * as querystring from "querystring";

export default abstract class AbstractCRUDApi implements CRUDApi {

    fetchItems(orderBy: string, orderWay: string, page: number, perPage: number): Promise<String> {
        let qs = querystring.stringify({
            sort: orderBy,
            direction: orderWay,
            page: page,
            per_page: perPage
        });
        return api.get(`${this.getBaseURL()}?${qs}`).then(res => res.data);
    }

    fetchItem(id: String): Promise<Object> {
        return api.get(`${this.getBaseURL()}/${id}`).then(res => res.data);
    }

    post(data: Object): Promise<Object>{
        return api.post(`${this.getBaseURL()}`, data).then(res => res.data);
    }
    
    abstract getBaseURL(): String;

}