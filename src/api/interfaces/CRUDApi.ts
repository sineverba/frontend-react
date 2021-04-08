export default interface CRUDApi {

    fetchItems(orderBy: String, orderWay: String, page: Number, perPage: Number): Promise<String>;

    fetchItem(id: String): Promise<Object>;

    post(data: Object): Promise<Object|String>;
    
}