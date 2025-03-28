import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import { handleGetAllCodeService } from "../../services/userServices";
import {
  handleGetAllProductService,
  handleGetProductByCategoryService,
  createProductService,
  deleteProductService,
  editProductService,
} from "../../services/adminServices";

export const fetchHotId = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllCodeService("hot");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_HOT_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_HOT_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ROLE_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_ROLE_FAIL,
      });
    }
  };
};

export const fetchBrandId = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllCodeService("brand");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_BRAND_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_BRAND_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_BRAND_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_BRAND_FAIL,
      });
    }
  };
};

export const fetchCategoryId = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllCodeService("category");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_CATEGORY_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_CATEGORY_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_CATEGORY_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_CATEGORY_FAIL,
      });
    }
  };
};

export const fetchStatusProductId = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllCodeService("productstatus");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_STATUS_PRODUCT_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_STATUS_PRODUCT_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_STATUS_PRODUCT_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_STATUS_PRODUCT_FAIL,
      });
    }
  };
};

export const fetchAllProduct = (page, limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllProductService(page, limit);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
          data1: res.data.data,
          data2: res.data.totalPages,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_PRODUCT_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_PRODUCT_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_ALL_PRODUCT_FAIL,
      });
    }
  };
};

export const fetchPc = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetProductByCategoryService("c1");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_PC_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_PC_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_PC_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_PC_FAIL,
      });
    }
  };
};

export const fetchLaptop = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetProductByCategoryService("c2");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_LAPTOP_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_LAPTOP_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_LAPTOP_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_LAPTOP_FAIL,
      });
    }
  };
};

export const fetchMouse = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetProductByCategoryService("c4");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_MOUSE_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_MOUSE_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_MOUSE_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_MOUSE_FAIL,
      });
    }
  };
};

export const fetchItem = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetProductByCategoryService("c3");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ITEM_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ITEM_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ITEM_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_ITEM_FAIL,
      });
    }
  };
};

export const createProduct = (data, page, limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await createProductService(data);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.CREATE_PRODUCT_SUCCESS,
        });
        toast.success("Thành công");
        dispatch(fetchAllProduct(page, limit));
      } else {
        toast.error("Thất bại");
        dispatch({
          type: actionTypes.CREATE_PRODUCT_FAIL,
        });
      }
    } catch (e) {
      console.log("CREATE_PRODUCT_FAIL: ", e);
      dispatch({
        type: actionTypes.CREATE_PRODUCT_FAIL,
      });
    }
  };
};

export const deleteProduct = (id, page, limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteProductService(id);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.DELETE_PRODUCT_SUCCESS,
        });
        toast.success("Xóa sản phẩm thành công");
        dispatch(fetchAllProduct(page, limit));
      } else {
        toast.error("Thất bại");
        dispatch({
          type: actionTypes.DELETE_PRODUCT_FAIL,
        });
      }
    } catch (e) {
      console.log("DELETE_PRODUCT_FAIL: ", e);
      dispatch({
        type: actionTypes.DELETE_PRODUCT_FAIL,
      });
    }
  };
};

export const updateProduct = (data, page, limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await editProductService(data);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        });
        toast.success("Thành công");
        dispatch(fetchAllProduct(page, limit, "c2"));
      } else {
        toast.error("Thất bại");
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_FAIL,
        });
      }
    } catch (e) {
      console.log("UPDATE_PRODUCT_FAIL: ", e);
      dispatch({
        type: actionTypes.UPDATE_PRODUCT_FAIL,
      });
    }
  };
};
