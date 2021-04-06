import CRUDApi from '../../api/interfaces/CRUDApi';

export default class GenericCRUDActions {

    private api: CRUDApi;
    private entityName: String;

    TRY_FETCH_COLLECTION: String;
    FETCH_COLLECTION_SUCCEEDED: String;
    FETCH_COLLECTION_FAILED: String;
    TRY_POST: String;
    POST_SUCCEEDED: String;
    POST_FAILED: String;
    
    constructor(entityName: String, api: CRUDApi){

        this.entityName = entityName;
        this.api = api;

        let ucEntityName = entityName.toUpperCase();
        this.TRY_FETCH_COLLECTION = `TRY_FETCH_${ucEntityName}_COLLECTION`;
        this.FETCH_COLLECTION_SUCCEEDED = `FETCH_${ucEntityName}_COLLECTION_SUCCEEDED`;
        this.FETCH_COLLECTION_FAILED = `FETCH_${ucEntityName}_COLLECTION_FAILED`;
        this.TRY_POST = `TRY_POST_${ucEntityName}`;
        this.POST_SUCCEEDED = `${ucEntityName}_POST_SUCCEEDED`;
        this.POST_FAILED = `${ucEntityName}_POST_FAILED`;

    }

    fetchAll(orderBy: String, orderWay: String, page: Number, perPage: Number){
        return  (dispatch: Function) => {
            dispatch({
                type: this.TRY_FETCH_COLLECTION,
                orderBy, orderWay, page, perPage
            });
            this.api.fetchAll(orderBy, orderWay, page, perPage)
                .then((data) => {
                    dispatch({
                        type: this.FETCH_COLLECTION_SUCCEEDED,
                        data
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: this.FETCH_COLLECTION_FAILED,
                        error
                    });
                });
        }
    }

    post(data: Object){
        return (dispatch: Function) => {
            dispatch({
                type: this.TRY_POST,
                data
            });
            this.api.post(data)
                .then((data) => {
                    dispatch({
                        type: this.POST_SUCCEEDED,
                        data
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: this.POST_FAILED,
                        error
                    });
                });
        }
    }

}