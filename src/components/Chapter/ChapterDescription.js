import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/bookActions";
import descriptionReducer from "../../redux/reducers/descrptipnReducer";
import userReducer from "../../redux/reducers/userReducer";

const ChapterDescription = ({ getAllPara, descriptionReducer, userReducer }) => {
  const params = useParams();
  const id = params.id;
  const token = userReducer.accessToken


  console.log(id);

useEffect(()=>{
    getAllPara(id,token)
},[])

console.log(descriptionReducer?.data?.[0]?.content);

  return (
    <>
      <h1 className="text-center">Description</h1>
      <h1 className="text-center" style={{fontWeight:"bolder"}}>{descriptionReducer?.data?.[0]?.content}</h1>
      {
        descriptionReducer?.data?.map((item,index)=>{
              {/* console.log(item) */}
              if(index===0){
              }else{
              return <p style={{fontSize:"18px"}} key={index}>{item?.content}</p>
              }
          })
      }
    </>
  );
};

const mapStateToProps = ({ descriptionReducer, userReducer }) => {
    // console.log(descriptionReducer);
  return { descriptionReducer , userReducer};
};
export default connect(mapStateToProps, actions)(ChapterDescription);
