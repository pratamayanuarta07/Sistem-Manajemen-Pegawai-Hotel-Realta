import { GET_ITEM,  GET_EMP_SALARY, GET_EMP_DEPT, DELETE_WODE, UPDATE_WODE, ADD_WODE, GET_WODE, UPDATE_WORO,ADD_WORO, GET_WORO_BY_DATE, GET_WORO, ADD_EMP, GET_EMP_NAME, GET_EMP, ADD_ITEM, DELETE_ITEM, LOGIN, REFRESH, ADD_POST, GET_POSTING, UPDATE_POSTING, GET_POSTING1, UPDATE_POSTING1, GET_SELF, GET_ONE, PICK_ONE, UPDATE_USR } from "../../action/user";
const initialState = {
    getListItemResult : false,
    getListItemLoading : false,
    getListItemError : false,

    getWodeItemResult : false,
    getWodeItemLoading : false,
    getWodeItemError : false,

    getEmpDeptItemResult : false,
    getEmpDeptItemLoading : false,
    getEmpDeptItemError : false,

    getEmpSalaryItemResult : false,
    getEmpSalaryItemLoading : false,
    getEmpSalaryItemError : false,

    getWoroItemResult : false,
    getWoroItemLoading : false,
    getWoroItemError : false,

    getWoroByItemResult : false,
    getWoroByItemLoading : false,
    getWoroByItemError : false,

    getEmpItemResult : false,
    getEmpItemLoading : false,
    getEmpItemError : false,

    getEmpNameItemResult : false,
    getEmpNameItemLoading : false,
    getEmpNameItemError : false,

    getSelfItemResult : false,
    getSelfItemLoading : false,
    getSelfItemError : false,

    addListItemResult : false,
    addListItemLoading : false,
    addListItemError : false,

    addEmpItemResult : false,
    addEmpItemLoading : false,
    addEmpItemError : false,

    addWodeItemResult : false,
    addWodeItemLoading : false,
    addWodeItemError : false,

    deleteListItemResult : false,
    deleteListItemLoading : false,
    deleteListItemError : false,

    deleteWodeItemResult : false,
    deleteWodeItemLoading : false,
    deleteWodeItemError : false,

    loginListItemResult : false,
    loginListItemLoading : false,
    loginListItemError : false,

    refreshListItemResult : false,
    refreshListItemLoading : false,
    refreshListItemError : false,

    addPostItemResult : false,
    addPostItemLoading : false,
    addPostItemError : false,

    addWoroItemResult : false,
    addWoroItemLoading : false,
    addWoroItemError : false,
    
    getPostItemResult : false,
    getPostItemLoading : false,
    getPostItemError : false,

    updatePostItemResult : false,
    updatePostItemLoading : false,
    updatePostItemError : false,

    updateDeptItemResult : false,
    updateDeptItemLoading : false,
    updateDeptItemError : false,

    updateWodeItemResult : false,
    updateWodeItemLoading : false,
    updateWodeItemError : false,

    updateWoroItemResult : false,
    updateWoroItemLoading : false,
    updateWoroItemError : false,

    get1PostItemResult : false,
    get1PostItemLoading : false,
    get1PostItemError : false,

    getOnePostItemResult : false,
    getOnePostItemLoading : false,
    getOnePostItemError : false,

    update1PostItemResult : false,
    update1PostItemLoading : false,
    update1PostItemError : false,

};
const list = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                getListItemResult: action.payload.data,
                getListItemLoading: action.payload.loading,
                getListItemError: action.payload.errorMessage
            }
        case GET_WODE:
            return {
                ...state,
                getWodeItemResult: action.payload.data,
                getWodeItemLoading: action.payload.loading,
                getWodeItemError: action.payload.errorMessage
            }
        case GET_EMP_DEPT:
            return {
                ...state,
                getEmpDeptItemResult: action.payload.data,
                getEmpDeptItemLoading: action.payload.loading,
                getEmpDeptItemError: action.payload.errorMessage
            }
        case GET_EMP_SALARY:
            return {
                ...state,
                getEmpSalaryItemResult: action.payload.data,
                getEmpSalaryItemLoading: action.payload.loading,
                getEmpSalaryItemError: action.payload.errorMessage
            }
        case GET_WORO:
            return {
                ...state,
                getWoroItemResult: action.payload.data,
                getWoroItemLoading: action.payload.loading,
                getWoroItemError: action.payload.errorMessage
            }
        case GET_WORO_BY_DATE:
            return {
                ...state,
                getWoroByItemResult: action.payload.data,
                getWoroByItemLoading: action.payload.loading,
                getWoroByItemError: action.payload.errorMessage
            }
        case GET_EMP:
            return {
                ...state,
                getEmpItemResult: action.payload.data,
                getEmpItemLoading: action.payload.loading,
                getEmpItemError: action.payload.errorMessage
            }
        case GET_EMP_NAME:
            return {
                ...state,
                getEmpNameItemResult: action.payload.data,
                getEmpNameItemLoading: action.payload.loading,
                getEmpNameItemError: action.payload.errorMessage
            }
        case GET_SELF:
            return {
                ...state,
                getSelfItemResult: action.payload.data,
                getSelfItemLoading: action.payload.loading,
                getSelfItemError: action.payload.errorMessage
            }
        case ADD_ITEM:
            return {
                ...state,
                addListItemResult: action.payload.data,
                addListItemLoading: action.payload.loading,
                addListItemError: action.payload.errorMessage
            }
        case ADD_WORO:
            return {
                ...state,
                addWoroItemResult: action.payload.data,
                addWoroItemLoading: action.payload.loading,
                addWoroItemError: action.payload.errorMessage
            }
        case ADD_EMP:
            return {
                ...state,
                addEmpItemResult: action.payload.data,
                addEmpItemLoading: action.payload.loading,
                addEmpItemError: action.payload.errorMessage
            }
        case ADD_WODE:
            return {
                ...state,
                addWodeItemResult: action.payload.data,
                addWodeItemLoading: action.payload.loading,
                addWodeItemError: action.payload.errorMessage
            }
        case DELETE_ITEM:
            return {
                ...state,
                deleteListItemResult: action.payload.data,
                deleteListItemLoading: action.payload.loading,
                deleteListItemError: action.payload.errorMessage
            }
        case DELETE_WODE:
            return {
                ...state,
                deleteWodeItemResult: action.payload.data,
                deleteWodeItemLoading: action.payload.loading,
                deleteWodeItemError: action.payload.errorMessage
            }
        case LOGIN:
            return {
                ...state,
                loginListItemResult: action.payload.data,
                loginListItemLoading: action.payload.loading,
                loginListItemError: action.payload.errorMessage
            }
        case REFRESH:
            return {
                ...state,
                refreshListItemResult: action.payload.data,
                refreshListItemLoading: action.payload.loading,
                refreshListItemError: action.payload.errorMessage
            }
        case ADD_POST:
            return {
                ...state,
                addPostItemResult: action.payload.data,
                addPostItemLoading: action.payload.loading,
                addPostItemError: action.payload.errorMessage
            }
        case GET_POSTING:
            return {
                ...state,
                getPostItemResult: action.payload.data,
                getPostItemLoading: action.payload.loading,
                getPostItemError: action.payload.errorMessage
            }
        case UPDATE_POSTING:
            return {
                ...state,
                updatePostItemResult: action.payload.data,
                updatePostItemLoading: action.payload.loading,
                updatePostItemError: action.payload.errorMessage
            }
        case UPDATE_USR:
            return {
                ...state,
                updateDeptItemResult: action.payload.data,
                updateDeptItemLoading: action.payload.loading,
                updateDeptItemError: action.payload.errorMessage
            }
        case UPDATE_WODE:
            return {
                ...state,
                updateWodeItemResult: action.payload.data,
                updateWodeItemLoading: action.payload.loading,
                updateWodeItemError: action.payload.errorMessage
            }
        case UPDATE_WORO:
            return {
                ...state,
                updateWoroItemResult: action.payload.data,
                updateWoroItemLoading: action.payload.loading,
                updateWoroItemError: action.payload.errorMessage
            }
        case GET_POSTING1:
            return {
                ...state,
                get1PostItemResult: action.payload.data,
                get1PostItemLoading: action.payload.loading,
                get1PostItemError: action.payload.errorMessage
            }
        case UPDATE_POSTING1:
            return {
                ...state,
                update1PostItemResult: action.payload.data,
                update1PostItemLoading: action.payload.loading,
                update1PostItemError: action.payload.errorMessage
            }  
        case GET_ONE:
            return {
                ...state,
                getOnePostItemResult: action.payload.data,
                getOnePostItemLoading: action.payload.loading,
                getOnePostItemError: action.payload.errorMessage
            }
            
        default:
            return state;
    }
}
export default list;