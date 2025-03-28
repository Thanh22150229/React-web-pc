import axios from "../axios";

const handleGetAllProductService = (pageInput, limitInput) => {
  return axios.get(
    `/api/get-product-list?page=${pageInput}&size=${limitInput}`
  );
};

const createProductService = (data) => {
  return axios.post("/api/create-products", data);
};

const deleteProductService = (userId) => {
  return axios.delete("/api/delete-product", {
    data: {
      id: userId,
    },
  });
};

const editProductService = (dataInput) => {
  return axios.put("api/update-products", dataInput);
};

const handleGetProductByCategoryService = (category) => {
  return axios.get(
    `/api/get-product-by-category?category=${category}`
  );
};

export { handleGetAllProductService, createProductService ,deleteProductService,editProductService,handleGetProductByCategoryService};
