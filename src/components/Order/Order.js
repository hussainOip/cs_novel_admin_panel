import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/bookActions";
import { connect } from "react-redux";
import CustomModal from "../Atomics/CustomModal";
import userReducer from "../../redux/reducers/userReducer";
import ReactPaginate from "react-paginate";

const Order = ({ getOrderList, orderReducer, userReducer }) => {
  const [isEditCatModal, setIsEditCatModal] = useState(false);
  const [rowIndex, setRowIndex] = useState();
  const value  =parseInt(orderReducer.orderCount / 25)
  var pageCount;
  if(orderReducer.orderCount  == (value*25)){
     pageCount = value  
  }else{

    pageCount = parseInt(orderReducer.orderCount / 25) + 1;
  }
  

  const [page, setpage] = useState(1);
  const token = userReducer.accessToken;

  useEffect(() => {
    getOrderList(token, 1);
  }, []);

  useEffect(() => {
    getOrderList(token, page);
  }, [page]);

  const showModal = (index) => {
    setIsEditCatModal(true);
    setRowIndex(index);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setpage(selectedPage + 1);
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
        {orderReducer?.order?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <img src={item?.user?.profile_img} alt="Profile Image" />
                </td>
                <th scope="row" key={index}>
                  {item?.user?.name}
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
        <tfoot>
          {/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true"  onClick={()=>{
          
        }}>&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link"  onClick={(e)=>{
          setpage(e.target.innerHTML)
        }} >1</a></li>
    <li class="page-item"><a class="page-link" onClick={(e)=>{
          setpage(e.target.innerHTML)
        }}>2</a></li>
    <li class="page-item"><a class="page-link"onClick={(e)=>{
          setpage(e.target.innerHTML)
        }} >3</a></li>
    <li class="page-item">
      <a class="page-link" aria-label="Next">
        <span aria-hidden="true" onClick={()=>{
          
        }}>&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav> */}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </tfoot>
      </table>

      {isEditCatModal && (
        <CustomModal
          size="xl"
          _oncloseModal={() => {
            setIsEditCatModal(false);
          }}
          updation={false}
        >
          {/* {console.log(rowIndex, 'index')}
          {console.log(orderReducer?.user?.[rowIndex])} */}
          <h1 className="mb-5">Details</h1>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">Product Name</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].product?.name}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Extra Amount</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].amount}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Product Amount</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].product?.amount}
              </li>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">Product Status</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].product?.status}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Status</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].status}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">User Email</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].user?.email}
              </li>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">User name</label>
              <li className="list-group-item">
                {orderReducer?.order?.[rowIndex].user?.username}
              </li>
            </div>
          </div>
        </CustomModal>
      )}
    </>
  );
};

const mapStateToProps = ({ orderReducer, userReducer }) => {
  // console.log(orderReducer);
  return { orderReducer, userReducer };
};

export default connect(mapStateToProps, actions)(Order);
