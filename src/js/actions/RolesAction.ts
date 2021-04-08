import GenericCRUDActions from "./GenericCRUDActions";
import { instance as rolesAPI } from "../../api/RolesAPI";

export default class RolesActions extends GenericCRUDActions {
    
    constructor() {

        super("roles", rolesAPI);
        
    }

    openModalDetail(id: String) {
        return (dispatch: Function) => dispatch({type: "OPEN_ROLE_MODAL_DETAIL", id});
    }

    closeModalDetail() {
        return (dispatch: Function) => dispatch({type: "CLOSE_ROLE_MODAL_DETAIL"});
    }

}

export const actions = new RolesActions();