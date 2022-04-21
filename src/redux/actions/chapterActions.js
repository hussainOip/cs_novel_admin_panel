import { toast } from "react-toastify";
import axios from "axios";
const base_url = "http://192.168.0.38:8002/api";

export const createBook=(body)=> async  (dispatch)=>{
    console.log(body)
    try{
        const response= await axios.post(`${base_url}/admin/chapter/create/${body}`)
        console.log(response?.data)
        dispatch({
          type:"CREATE_BOOK",
          payload: {body}
        })
        if (response.data.success){
            toast.success("Created Book Successfully")
          }
          else{
            toast.error(response?.data?.msg)
          }
    }
    catch(error){
      toast.error(error)
        console.log(error)
    }
}


