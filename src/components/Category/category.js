import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/categoryAction";
import userReducer from "../../redux/reducers/userReducer";
import CustomModal from "../Atomics/CustomModal";
import CustomToggle from "../Atomics/CustomToggle";

const Category = ({
  get_categories,
  categoriesReducer,
  update_categories,
  unable_disable_category,
  add_category,
  userReducer
}) => {
  const [isEditCatModal, setIsEditCatModal] = useState(false);
  const [isCreateCat, setIsCreateCat] = useState(false);
  const [modalInputValue, setModalInputValue] = useState({
    id: "",
    cat_name: "",
  });
const accessToken = userReducer.accessToken 
  useEffect(() => {
    get_categories(accessToken);
  }, []);
console.log(isCreateCat);
  function changeCategoriesData(id) {
    console.log(modalInputValue)
    update_categories(modalInputValue,accessToken).then(() => {
      setIsEditCatModal(false);
      setModalInputValue({
        id:"",
        cat_name: "",
      });
      setIsCreateCat(false)
      get_categories(accessToken);
    });
  }

  return (
    <>
      <div className="col-lg-12">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="user_heading my-4">Categories</h2>
          <button
            className="btn btn-primary custom-btn"
            onClick={() => {
              setIsEditCatModal(true);
              setIsCreateCat(true);
            }}
          >
            Add Category
          </button>
        </div>
        <div className="table-responsive custom_table">
          <table className="table">
            <thead>
              <tr>
                <th className="pb-4">Categry Name</th>
                <th className="pb-4"></th>
                <th className="pb-4"></th>
                <th className="text-center pb-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoriesReducer?.categories?.map((item, index) => {
                {/* console.log(item, "=====map====="); */}
                return (
                  <tr key={index}>
                    <td colSpan="3">{item?.name}</td>
                    <td>
                      <div className="d-flex category-action-td">
                        <CustomToggle
                          isStatusTrue={item?.status}
                          unable_disable={() =>
                            unable_disable_category(item?._id,accessToken).then(() => {
                              get_categories(accessToken);
                            })
                          }
                        />
                        <button
                          className="btn custom-btn"
                          onClick={() => {
                            setIsEditCatModal(true);
                            setModalInputValue({
                              id: item?._id,
                              cat_name: item?.name,
                            });
                          }}
                        >
                          Edit
                          <i className="ml-2 fa fa-pencil-square-o"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* {console.log(modalInputValue.id)} */}
      {isEditCatModal && (
        <CustomModal
          _oncloseModal={() => {
            setIsEditCatModal(false);
            setIsCreateCat(false)
            setModalInputValue({ id: "", cat_name: "" });
          }}
          isDisabled={modalInputValue.cat_name.length === 0}
          onSaveButton={() => {isCreateCat ? add_category(modalInputValue.cat_name,accessToken).then(()=>{
            setModalInputValue({ id: "", cat_name: "" })
            setIsEditCatModal(false)
            setIsCreateCat(false)
            get_categories(accessToken)
          }) :changeCategoriesData(modalInputValue.id)}}
          updation={true}
        >
          <label>Category</label>
          <input
            type="text"
            value={modalInputValue.cat_name}
            onChange={(e) =>
              setModalInputValue({
                ...modalInputValue,
                cat_name: e.target.value,
              })
            }
          />
        </CustomModal>
      )}
    </>
  );
};

function mapStateToProps({ categoriesReducer ,userReducer}) {
  return {
    categoriesReducer,userReducer
  };
}

export default connect(mapStateToProps, actions)(Category);
