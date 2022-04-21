import React, { useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/userAction";
import userDP from "../../assets/images/user-icon.png";

const Userlists = ({ get_userlists, blockUnblockUser, userReducer }) => {
  useEffect(() => {
    get_userlists();
  }, []);

  return (
    <>
      <div className="col-lg-12">
        <div className="card">
            <h2 className="user_heading my-4">User</h2>
          <div className="body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>User Image</th>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Unblocked / Blocked</th>
                  </tr>
                </thead>
                <tbody>
                  {userReducer.user.map((item, index) => {
                    // console.log(item, '=====map=====')
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={
                              item?.profile_img === null
                                ? userDP
                                : item?.profile_img?.url
                            }
                          />
                        </td>
                        <td>{item?._id}</td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>
                          <div className={`switch-toggle ${item?.blocked}`}>
                            <input
                              className="d-none"
                              type="checkbox"
                              id={item?._id}
                              value={item.blocked}
                              onChange={(e) =>
                                blockUnblockUser(item?._id).then(() => {
                                  get_userlists();
                                })
                              }
                            />
                            <label htmlFor={item?._id}></label>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ userReducer }) {
  return {
    userReducer,
  };
}

export default connect(mapStateToProps, actions)(Userlists);
