import React, { useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/userAction";
import userDP from "../../assets/images/user-icon.png";
import Pagination from '@material-ui/lab/Pagination';
import ReactPaginate from "react-paginate";
  
const Userlists = ({ get_userlists, blockUnblockUser, userReducer }) => {
  const pageCount = parseInt(userReducer.userCount / 25) + 1;
  const [page, setpage] = useState(1);
  const token = userReducer.accessToken;
  useEffect(() => {
    get_userlists(token,1)    

  }, []);
  useEffect(()=>{
   
    get_userlists(token,page);
  },[page])
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setpage(selectedPage + 1);
  };


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
                  {userReducer?.userlist?.map((item, index) => {
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
                        <td>{item?._id.slice(item._id.length - 5)}</td>
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

              <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
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
