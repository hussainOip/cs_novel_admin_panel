import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/userAction";
import CustomModal from "../Atomics/CustomModal";

const UsersList = ({ get_userlists, blockUnblockUser, userReducer }) => {
  let accounts = [
    { type_name: "Free", type_id: 1 },
    { type_name: "Bronze", type_id: 2 },
    { type_name: "Bronze plus", type_id: 3 },
    { type_name: "Silver", type_id: 4 },
    { type_name: "Gold", type_id: 5 },
  ];
  const [rowIndex, setRowIndex] = useState();
  const [isEditCatModal, setIsEditCatModal] = useState(false);
  const [page, setpage] = useState(1);
  const token = userReducer.accessToken;
  const value = parseInt(userReducer.userCount / 25);
  var pageCount;

  const showModal = (index) => {
    setIsEditCatModal(true);
    setRowIndex(index);
  };

  if (userReducer.userCount == value * 25) {
    pageCount = value;
  } else {
    pageCount = parseInt(userReducer.userCount / 25) + 1;
  }

  useEffect(() => {
    get_userlists(token, 1);
  }, []);
  useEffect(() => {
    get_userlists(token, page);
  }, [page]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setpage(selectedPage + 1);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="block-header" />
        <div className="row clearfix">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table header-border table-hover table-custom spacing5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Account Type</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userReducer?.userlist?.map((item, i) => {
                    return (
                      <tr>
                        <th className="w60">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.accoun_type === 1
                                ? "badge-primary"
                                : item.accoun_type === 2
                                ? "badge-secondary"
                                : item.accoun_type === 3
                                ? "badge-dark"
                                : item.accoun_type === 4
                                ? "badge-light"
                                : "badge-warning"
                            }`}
                          >
                            {accounts.map((type) => {
                              return (
                                type.type_id === item.accoun_type &&
                                type.type_name
                              );
                            })}
                          </span>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-primary"
                            onClick={() => showModal(i)}
                          >
                            Show
                          </button>
                          {/* <button
                            onClick={() => console.log(item.id)}
                            className="btn btn-small btn-danger ml-2"
                          >
                            Remove
                          </button> */}
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <th className="w60">1</th>
                    <td>Home Decor Range</td>
                    <td>
                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-primary"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-primary">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Bathroom Essentials</td>
                    <td>
                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-success">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Disney Princess Pink 18' School Bag</td>
                    <td>
                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-dark">70%</span>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <th>4</th>
                    <td>iPhone XS and XS Max</td>
                    <td>
                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-danger">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Apple Smartwatches</td>
                    <td>
                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-warning">70%</span>
                    </td>
                  </tr> */}
                </tbody>
                <tfoot>
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
            </div>
          </div>
        </div>
      </div>
      {isEditCatModal && (
        <CustomModal
          size="xl"
          _oncloseModal={() => {
            setIsEditCatModal(false);
          }}
          updation={false}
        >
          {/* {console.log(rowIndex, 'index')}
          {console.log(userReducer?.userlist?.[rowIndex])} */}
          <h1 className="mb-5">Details</h1>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">First Name</label>
              <li className="list-group-item">
                {userReducer?.userlist?.[rowIndex]?.firstNname}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Last Name</label>
              <li className="list-group-item">
                {userReducer?.userlist?.[rowIndex].lastName}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Email</label>
              <li className="list-group-item">
                {userReducer?.userlist?.[rowIndex].email}
              </li>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">Role</label>
              <li className="list-group-item">
                {userReducer?.userlist?.[rowIndex].role.name}
              </li>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Profile Image</label>
              <img src={userReducer?.userlist?.[rowIndex].profile_img} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">Subscription</label>
              <li className="list-group-item">
                {userReducer?.userlist?.[rowIndex].subscription}
              </li>
            </div>
          </div>

          {/* <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">User name</label>
                <li className="list-group-item">{userReducer?.userlist?.[rowIndex].user?.username}</li>
              </div>
            </div> */}
        </CustomModal>
      )}
    </>
  );
};

function mapStateToProps({ userReducer }) {
  return {
    userReducer,
  };
}

export default connect(mapStateToProps, actions)(UsersList);
