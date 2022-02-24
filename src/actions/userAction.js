import { toast } from "react-toastify";
import { base_url } from "../../src/config/config.json";
import axios from "axios";

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