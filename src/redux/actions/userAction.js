import { toast } from "react-toastify";
import { base_url } from "../../config/config.json";
import axios from "axios";
import userReducer from "../reducers/userReducer";


export const userLogin = (data, onSuccess) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://192.168.0.38:8002/api/users/login`,
      data
    );
    // console.log(response.data);
    // console.log(response.data.user.token, "============USER LOGIN");
    if (response?.data?.success) {
      onSuccess();
      dispatch({
        type: "USER_LOGIN",
        payload:response.data.user
      });
      toast.success(response?.data?.msg);
    } else {
      toast.warn(response?.data?.msg, {
        autoClose: 5000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 5000,
    });
  }
};

export const userData = (keyword) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://192.168.0.38:8000/api/book/searchBooks?searchValue=&userId=61d3f78c3b18fcf1a8088566`
    );
    dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "GET_ERROR",
      payload: console.log(e),
    });
  }
};

export const get_userlists = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/admin/users/gets`);
    if (response.data.success) {
      dispatch({
        type: "GET_USERLISTS",
        payload: response.data.data,
      });
    } else {
      toast.warn("Wow so easy!", {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      autoClose: 1000,
    });
  }
};

export const blockUnblockUser = (user_id) => async () => {
  try {
    const response = await axios.put(
      `${base_url}/admin/users/block/${user_id}`
    );
    if (response.data.success) {
      toast.info(response.data.msg, {
        autoClose: 1000,
      });
    } else {
      toast.warn("Wow so easy!");
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
