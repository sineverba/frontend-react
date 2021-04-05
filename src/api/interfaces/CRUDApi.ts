export default interface CRUDApi {

    fetchAll(orderBy: String, orderWay: String): Promise<String>;

    post(data: Object): Promise<Object|String>;
    
}