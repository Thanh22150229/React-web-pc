import actionTypes from "../actions/actionTypes";

const initialState = {
  statusProductIds: [],
  brandIds: [],
  categoryIds: [],
  products: [],
  arrPc: [],
  arLaptop: [],
  arrMouse: [],
  arrItem: [],
  totalPages: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STATUS_PRODUCT_SUCCESS:
      return {
        ...state,
        statusProductIds: action.data,
      };

    case actionTypes.FETCH_STATUS_PRODUCT_FAIL:
      return {
        ...state,
        statusProductIds: [], // Return a new state with empty statusProducts
      };
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryIds: action.data, // Correctly update statusProducts immutably
      };

    case actionTypes.FETCH_CATEGORY_FAIL:
      return {
        ...state,
        categoryIds: [], // Return a new state with empty statusProducts
      };

    case actionTypes.FETCH_BRAND_SUCCESS:
      return {
        ...state,
        brandIds: action.data, // Correctly update brandIds immutably
      };

    case actionTypes.FETCH_BRAND_FAIL:
      return {
        ...state,
        brandIds: [], // Return a new state with empty brandIds
      };
    case actionTypes.FETCH_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.data1,
        totalPages: action.data2,
      };

    case actionTypes.FETCH_ALL_PRODUCT_FAIL:
      return {
        ...state,
        products: [],
        totalPages: [],
      };
    case actionTypes.FETCH_PC_SUCCESS:
      return {
        ...state,
        arrPc: action.data,
      };

    case actionTypes.FETCH_PC_FAIL:
      return {
        ...state,
        arrPc: [],
      };

    case actionTypes.FETCH_LAPTOP_SUCCESS:
      return {
        ...state,
        arrLaptop: action.data,
      };

    case actionTypes.FETCH_LAPTOP_FAIL:
      return {
        ...state,
        arrLaptop: [],
      };
    case actionTypes.FETCH_MOUSE_SUCCESS:
      return {
        ...state,
        arrMouse: action.data,
      };

    case actionTypes.FETCH_MOUSE_FAIL:
      return {
        ...state,
        arrMouse: [],
      };
      case actionTypes.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        arrItem: action.data,
      };

    case actionTypes.FETCH_ITEM_FAIL:
      return {
        ...state,
        arrItem: [],
      };

    default:
      return state;
  }
};

export default adminReducer;
