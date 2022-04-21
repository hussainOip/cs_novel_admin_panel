import { toast } from "react-toastify";
import { base_url } from "../../config/config.json";
import axios from "axios";

export const get_categories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${base_url}/admin/categories/gets`
    );
    //   console.log(response, '============actions')
    if (response.data.success) {
      dispatch({
        type: "GET_CATEGORIES",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      autoClose: 1000,
    });
  }
};

export const update_categories = (data) => async () => {
  // console.log(data, "============actions");
  try {
    const response = await axios.put(
      `${base_url}/admin/categories/update/${data.id}`,
      { name: data.cat_name }
    );
    // console.log(response, "============actions");
    if (response.data.success) {
      toast.success(response.data.msg, {
        autoClose: 1000,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      autoClose: 1000,
    });
  }
};

export const unable_disable_category = (data) => async () => {
  // console.log(data, "============actions");
  try {
    const response = await axios.put(`${base_url}/admin/categories/block/${data}`);
    // console.log(response, "============actions");
    if (response.data.success) {
      toast.success(response.data.msg, {
        autoClose: 1000,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      autoClose: 1000,
    });
  }
};

export const add_category = (data) => async () => {
  // console.log(data, "============actions");
  try {
    const response = await axios.post(`${base_url}/admin/categories/create`, { name : data });
    console.log(response, "============actions");
    if (response.data.success) {
      toast.success(response.data.msg, {
        autoClose: 1000,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      autoClose: 1000,
    });
  }
};