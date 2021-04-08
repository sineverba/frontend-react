export default interface CRUDApi {

    fetchAll(orderBy: String, orderWay: String, page: Number, perPage: Number): Promise<String>;

    fetchSingle(id: String): Promise<Object>;

    post(data: Object): Promise<Object|String>;
    
}