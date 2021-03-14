import CRUDApi from '../../api/interfaces/CRUDApi';

export default class GenericCRUDActions {

    private api: CRUDApi;
    private entityName: String;

    TRY_FETCH_COLLECTION: String;
    FETCH_COLLECTION_SUCCEEDED: String;
    FETCH_COLLECTION_FAILED: String;
    
    constructor(entityName: String, api: CRUDApi){

        this.entityName = entityName;
        this.api = api;

        let ucEntityName = entityName.toUpperCase();
        this.TRY_FETCH_COLLECTION = `TRY_FETCH_${ucEntityName}_COLLECTION`;
        this.FETCH_COLLECTION_SUCCEEDED = `FETCH_${ucEntityName}_COLLECTION_SUCCEEDED`;
        this.FETCH_COLLECTION_FAILED = `FETCH_${ucEntityName}_COLLECTION_FAILED`;

    }

    fetchAll(){
       
        return  (dispatch: Function) => {
            dispatch({
                type: this.TRY_FETCH_COLLECTION
            });
            this.api.fetchAll()
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

}