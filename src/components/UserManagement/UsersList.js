import React from "react";

const UsersList = () => {
  let accounts = [
    { type_name: "Free", type_id: 1 },
    { type_name: "Bronze", type_id: 2 },
    { type_name: "Bronze plus", type_id: 3 },
    { type_name: "Silver", type_id: 4 },
    { type_name: "Gold", type_id: 5 },
  ];
  let users = [
    { id: 1, name: "TestUser", email: "test@gmail.com", accoun_type: 1 },
    { id: 2, name: "TestUser1", email: "test@gmail.com", accoun_type: 2 },
    { id: 3, name: "TestUser2", email: "test@gmail.com", accoun_type: 3 },
    { id: 4, name: "TestUser3", email: "test@gmail.com", accoun_type: 4 },
    { id: 5, name: "TestUser4", email: "test@gmail.com", accoun_type: 5 },
    { id: 6, name: "TestUser6", email: "test@gmail.com", accoun_type: 1 },
    { id: 7, name: "TestUser17", email: "test@gmail.com", accoun_type: 2 },
    { id: 8, name: "TestUser8", email: "test@gmail.com", accoun_type: 3 },
    { id: 9, name: "TestUser99", email: "test@gmail.com", accoun_type: 4 },
    { id: 10, name: "TestUser34", email: "test@gmail.com", accoun_type: 5 },
  ];
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
                  {users.map((item, i) => {
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
                            onClick={() => console.log(item.id)}
                            className="btn btn-small btn-success"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => console.log(item.id)}
                            className="btn btn-small btn-danger ml-2"
                          >
                            Remove
                          </button>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
