import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/bookActions";
import { connect } from "react-redux";
import CustomModal from "../Atomics/CustomModal";
import userReducer from "../../redux/reducers/userReducer";

const Order = ({ getOrderList, orderReducer, userReducer }) => {
  const [isEditCatModal, setIsEditCatModal] = useState(false);
  const [rowIndex, setRowIndex] = useState();

  const token = userReducer.accessToken

  useEffect(() => {
    getOrderList(token);
  }, []);

  const showModal = (index) => {
    setIsEditCatModal(true);
    setRowIndex(index);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-5">List Of Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ fontWeight: "bold" }}>
              Profile Image
            </th>
            <th scope="col" style={{ fontWeight: "bold" }}>
              User Name
            </th>
            <th scope="col" style={{ fontWeight: "bold" }}>
              Product
            </th>
            <th scope="col" style={{ fontWeight: "bold" }}>
              Active
            </th>
            <th scope="col" style={{ fontWeight: "bold" }}>
              Amount
            </th>
            <th scope="col" style={{ fontWeight: "bold" }}>
              Show Details
            </th>
          </tr>
        </thead>
        {orderReducer?.user?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <img src="" alt="Profile Image" />
                </td>
                <th scope="row" key={index}>
                  {item?.user?.username}
                </th>
                <td>{item?.product?.name}</td>
                <td>{item?.active.toString()}</td>
                <td>{item?.amount}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => showModal(index)}
                  >
                    Show
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {isEditCatModal && (
        <CustomModal
          size="xl"
          _oncloseModal={() => {
            setIsEditCatModal(false);
          }}
        >
          {/* {console.log(rowIndex, 'index')}
          {console.log(orderReducer?.user?.[rowIndex])} */}
            <h1 className="mb-5">Details</h1>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">Product Name</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].product?.name}</li>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Extra Amount</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].amount}</li>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Product Amount</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].product?.amount}</li>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">Product Status</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].product?.status}</li>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Status</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].status}</li>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">User Email</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].user?.email}</li>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">User name</label>
                <li className="list-group-item">{orderReducer?.user?.[rowIndex].user?.username}</li>
              </div>
            </div>
        </CustomModal>
      )}
    </>
  );
};

const mapStateToProps = ({ orderReducer, userReducer }) => {
  // console.log(orderReducer);
  return { orderReducer , userReducer };
};

export default connect(mapStateToProps, actions)(Order);
