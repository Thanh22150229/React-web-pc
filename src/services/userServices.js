import axios from "../axios";

const handleLoginService = (userEmail, userPassword) => {
  return axios.post("/api/login-user", {
    email: userEmail,
    password: userPassword,
  });
};

const handleRegisterService = (userName, password, phoneNumber) => {
  return axios.post("/api/register-user", {
    email: userName,
    password: password,
    phoneNumber: phoneNumber,
  });
};

const createUserService = (data) => {
  return axios.post("/api/create-user", data);
};
const handleGetAllUserService = (pageInput, limitInput) => {
  return axios.get(`/api/get-all-user?page=${pageInput}&size=${limitInput}`);
};

const handleGetAllCodeService = (type) => {
  return axios.get(`/api/get-allCode?type=${type}`);
};

const deleteUserService = (userId) => {
  return axios.delete("api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (dataInput) => {
  return axios.put("/api/update-user", dataInput);
};

export {
  handleLoginService,
  handleRegisterService,
  handleGetAllUserService,
  handleGetAllCodeService,
  deleteUserService,
  editUserService,
  createUserService,
};
