export default interface CRUDApi {

    fetchAll(orderBy: String, orderWay: String, page: Number, perPage: Number): Promise<String>;

    post(data: Object): Promise<Object|String>;
    
}