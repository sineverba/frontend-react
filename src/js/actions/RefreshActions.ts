import GenericCRUDActions from "./GenericCRUDActions";
import { instance as refreshApi } from "../../api/RefreshAPI";
import moment from "moment";

export default class RefreshActions extends GenericCRUDActions {
    
    constructor() {
        super("refresh", refreshApi);
    }

    refreshToken(){
        const expiresAt = localStorage.getItem('REACT_FE_ACCESS_TOKEN_EXPIRES_AT');
        const isExpired = moment(expiresAt, 'DD/MM/YYYY HH:mm:ss').isBefore(moment())
        if (isExpired) {
            //const currentAccessToken = localStorage.getItem('REACT_FE_ACCESS_TOKEN')
            return (dispatch: Function) => {
                dispatch({
                    type: "TRY_POST_REFRESH",
                });
                refreshApi.post({})
                    .then((data) => {
                        dispatch({
                            type: "REFRESH_POST_SUCCEEDED",
                            data
                        })
                    })
                    .catch((error) => {
                        dispatch({
                            type: "REFRESH_POST_FAILED",
                            error
                        });
                    });
            }
        }
        return (dispatch: Function) => dispatch({type: "CHECK_REFRESH_TOKEN"})
    }

}

export const actions = new RefreshActions();