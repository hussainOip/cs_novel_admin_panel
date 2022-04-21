import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";



const base_url = "http://192.168.0.38:8002/api";


export const updateChapter = (data,token) => async (dispatch) => {
  console.log(data);
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.put(
      `${base_url}/admin/book/season/updateSingleChapter`,
      data,
      header
    );
    if (response?.data?.success) {
      dispatch({
        type: "CHAPTER_UPDATED",
        payload: { data },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};


export const getAllPara = (id,token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(`${base_url}/admin/para/getAllPara/${id}`,header);
    if (response.data.success) {
      dispatch({
        type: "GET_ALL_PARA",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 2000,
    });
  }
};

export const getOrderList = (token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(`${base_url}/admin/subscription/gets`,header);
    if (response.data.success) {
      dispatch({
        type: "GET_ORDER_LIST",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 2000,
    });
  }
};

export const getAllChapters = (seasonId, bookId,token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(
      `${base_url}/admin/chapter/getChapters?season=${seasonId}&book=${bookId}`, header
    );
    if (response.data.success) {
      dispatch({
        type: "GET_ALL_CHAPTERS",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 2000,
    });
  }
};

export const updateSeason = (id, data,token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.put(
      `${base_url}/admin/season/update/${id}`,
      data,
      header
    );
    if (response?.data?.success) {
      dispatch({
        type: "UPDATE_SEASON",
        payload: { id, ...data },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

export const deleteSeason = (id,token) => async (dispatch) => {
  console.log(id);
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.delete(
      `${base_url}/admin/season/delete/${id}`,header
    );
    console.log(response.data);
    if (response.data.success) {
      dispatch({
        type: "DELETE_SEASON",
        payload: { id },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const createChapter = (data,token) => async () => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.post(
      `${base_url}/admin/book/season/publishSingleChapter`,
      data,
      header
    );
    if (response?.data?.success) {
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

export const createSeasons = (data,token) => async () => {
  console.log(data);
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.post(`${base_url}/admin/season/create/`, data,header);
    console.log(response.data, "============CREATED BOOK");
    if (response?.data?.success) {
    } else {
      toast.warn(response?.data?.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 1000,
    });
  }
};

export const getSeasons = (id,token) => async (dispatch) => {
  // console.log(id,token);
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(`${base_url}/admin/season/gets/${id}`,header);
    if (response.data.success) {
      dispatch({
        type: "GET_SEASONS",
        payload: response.data.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 2000,
    });
  }
};

export const createBook = (data,token) => async () => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.post(`${base_url}/admin/book/create/`, data,header);
    if (response.data.success) {
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error.message || error.msg, {
      autoClose: 1000,
    });
  }
};

export const deleteBook = (id,token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.delete(`${base_url}/admin/book/delete/${id}`,header);
    console.log(response.data);
    if (response.data.success) {
      dispatch({
        type: "DELETE_BOOK",
        payload: { id },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

export const uploadBookImage = (image,token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const formData = new FormData();
    formData.append("profileImage", image);
    const response = await axios.post(
      `${base_url}/users/uploadImage`,
      formData,
      header
    );
    if (response.data.success) {
      return response?.data?.data?._id;
    } else {
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

export const update_book = (id, data,token) => async (dispatch) => {
  console.log(id, "Update Book ID", data, "Updated Book Data");
  try { 
    const header = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };
    const response = await axios.put(
      `${base_url}/admin/book/update/${id}`,
      data,
      header
    );
    if (response?.data?.success) {
      dispatch({
        type: "UPDATE_BOOK",
        payload: { id, ...data },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

export const update_categories = (data, token) => async () => {
  console.log(data, "============actions");
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.put(
      `${base_url}/admin/book/update/${data.id}`,
      { name: data.cat_name }, header
    );
    console.log(response, "============actions");
    if (response.data.success) {
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 1000,
    });
  }
};

export const getBook = (token) => async (dispatch) => {
  try {
    // console.log(token)
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(`${base_url}/admin/book/gets`,
    header);
    if (response.data.success) {
      dispatch({
        type: "GET_BOOK",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error.message || error.msg, {
      autoClose: 1000,
    });
  }
};

export const get_categories = (token) => async (dispatch) => {
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.get(`${base_url}/admin/categories/gets`,header);
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
    toast.error(error?.response?.data?.msg, {
      autoClose: 1000,
    });
  }
};

export const bookActions = (data,token) => async (dispatch) => {
  console.log(data);
  try {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const response = await axios.post(
      `http://192.168.0.38:8002/api/admin/book/create`,
      data,
      header
    );
    if (response.data.success) {
      dispatch({
        type: "ADD_BOOK",
        payload: response.data.data,
      });
    } else {
      toast.warn(response.data.msg, {
        autoClose: 1000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      autoClose: 1000,
    });
  }
};
