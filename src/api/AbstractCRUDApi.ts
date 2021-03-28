import CRUDApi from "./interfaces/CRUDApi";
import api from "./api";

export default abstract class AbstractCRUDApi implements CRUDApi {

    fetchAll(): Promise<String> {
        return api.get(`${this.getBaseURL()}`).then( res => res.data);
    }

    post(data: Object): Promise<Object>{
        return api.post(`${this.getBaseURL()}`, data).then(res => res.data);
    }
    
    abstract getBaseURL(): String;

}