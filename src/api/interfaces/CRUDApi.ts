export default interface CRUDApi {

    fetchAll(): Promise<String>;

    post(data: Object): Promise<Object|String>;
    
}