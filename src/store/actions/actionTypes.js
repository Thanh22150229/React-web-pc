const actionTypes = Object.freeze({
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    //user
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    FETCH_ALL_USER_SUCCESS:'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAIL: 'FETCH_ALL_USER_FAIL',

    FETCH_ROLE_SUCCESS:'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIL:'FETCH_ROLE_FAIL',

    REGISTER_SUCCESS:'REGISTER_SUCCESS',
    REGISTER_FAIL:'REGISTER_FAIL',

    EDIT_USER_SUCCESS:'EDIT_USER_SUCCESS',
    EDIT_USER_FAIL:'EDIT_USER_FAIL',

    DELETE_USER_SUCCESS:'DELETE_USER_SUCCESS',
    DELETE_USER_FAIL:'DELETE_USER_FAIL',

    //admin
    FETCH_BRAND_SUCCESS:'FETCH_BRAND_SUCCESS',
    FETCH_BRAND_FAIL:'FETCH_BRAND_FAIL',

    FETCH_STATUS_PRODUCT_SUCCESS:'FETCH_STATUS_PRODUCT_SUCCESS',
    FETCH_STATUS_PRODUCT_FAIL:'FETCH_STATUS_PRODUCT_FAIL',

    FETCH_HOT_SUCCESS:'FETCH_HOT_SUCCESS',
    FETCH_HOT_FAIL:'FETCH_HOT_FAIL',

    FETCH_CATEGORY_SUCCESS:'FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_FAIL:'FETCH_CATEGORY_FAIL',

    FETCH_ALL_PRODUCT_SUCCESS:"FETCH_ALL_PRODUCT_SUCCESS",
    FETCH_ALL_PRODUCT_FAIL:"FETCH_ALL_PRODUCT_FAIL",

    CREATE_PRODUCT_SUCCESS:"CREATE_PRODUCT_SUCCESS",
    CREATE_PRODUCT_FAIL:"CREATE_PRODUCT_FAIL",

    DELETE_PRODUCT_SUCCESS:"DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL:"DELETE_PRODUCT_FAIL",

    UPDATE_PRODUCT_SUCCESS:"UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL:'UPDATE_PRODUCT_FAIL',

    FETCH_PC_SUCCESS:"FETCH_PC_SUCCESS",
    FETCH_PC_FAIL:"FETCH_PC_FAIL",
 
    FETCH_LAPTOP_SUCCESS:"FETCH_LAPTOP_SUCCESS",
    FETCH_LAPTOP_FAIL:"FETCH_LAPTOP_FAIL",

    FETCH_MOUSE_SUCCESS:"FETCH_MOUSE_SUCCESS",
    FETCH_MOUSE_FAIL:"FETCH_MOUSE_FAIL",

    FETCH_ITEM_SUCCESS:"FETCH_ITEM_SUCCESS",
    FETCH_ITEM_FAIL:"FETCH_ITEM_FAIL",

    
})
export default actionTypes;