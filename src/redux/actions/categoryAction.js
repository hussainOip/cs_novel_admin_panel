import { toast } from "react-toastify";
import { base_url } from "../../config/config.json";
import axios from "axios";

export const get_categories = (token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(
      `${base_url}/admin/categories/gets`,header
    );
      console.log(response, '============actions')
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

export const update_categories = (data,token) => async () => {
  // console.log(data, "============actions");
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.put(
      `${base_url}/admin/categories/update/${data.id}`,
      { name: data.cat_name }, header
    );
    
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

export const unable_disable_category = (data,token) => async () => {
  // console.log(data, "============actions");
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.put(`${base_url}/admin/categories/block/${data}`,{},header);
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

export const add_category = (data,token) => async () => {
  // console.log(data, "============actions");
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.post(`${base_url}/admin/categories/create`, { name : data },header);
    
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