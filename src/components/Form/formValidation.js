import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userReducer from "../../redux/reducers/userReducer";
import * as actions from "../../redux/actions/bookActions";
const base_url = "http://192.168.0.38:8002/public/";

const FormValidation = ({
  userReducer,
  formBookReducer,
  getBook,
  get_categories,
  categoriesReducer,
  update_book,
  deleteBook,
  uploadBookImage,
  createBook,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur."
  );
  const [folderId, setFolderId] = useState("");
  const [access, setAccess] = useState("");
  const [image, setImage] = useState(false);
  const [id, setId] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");
  const [update, setUpdate] = useState(false);
  const [uploadstatus, setuploadstatus] = useState(true);
  const history = useHistory();

  const onSuccess = () => {
    getBook();
  };

  // console.log(userReducer.accessToken);
  useEffect(() => {
    get_categories(userReducer.accessToken);
    getBook(userReducer.accessToken);
  }, []);


  useEffect(() => {
    if (categoriesReducer?.user?.length > 0) {
      setSelectedCategory(categoriesReducer?.user[0]?._id);
      if (formBookReducer?.user?.length > 0) {
        setSelectedAccess(formBookReducer?.user[0]?.Access);
      }
    }
  }, [categoriesReducer?.user, formBookReducer?.user]);

  const editItem = (item) => {
    setUpdate(true);
    setId(item?._id);
    setTitle(item?.Title);
    setDescription(item?.Description);
    setFolderId(item?.FolderID);
    setuploadstatus(true);
  };
  const deleteItem = (id) => {
    deleteBook(id,userReducer.accessToken).then(getBook());
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onCreateBook = () => {
    getBook();
  };

  const addBook = async (e) => {
    e.preventDefault();
    try {
      const response = await uploadBookImage(selectedImage,userReducer.accessToken);
      let bookData = {
        Title: title,
        category: selectedCategory,
        Access: selectedAccess,
        FolderID: folderId,
        Description: description,
        profileImage: selectedImage?.name,
        Cover: response,
      };
      createBook(bookData, response, userReducer.accessToken).then(onCreateBook);
    } catch (error) {
      toast.error(error.message || error.msg, {
        autoClose: 5000,
      });
    }
    setCategory("");
    setAccess("");
    setImage("");
    setuploadstatus(true);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    const response = await uploadBookImage(selectedImage);
    if (
      title.length > 0 &&
      (category.length > 0 || selectedImage?.name) &&
      (folderId.length > 0 || access) &&
      description.length > 0
    ) {
      const editBookData = {
        Title: title,
        Cover: response,
        Description: description,
        FolderID: folderId,
        profileImage: selectedImage?.name,
      };
      update_book(id, editBookData,userReducer.accessToken).then(onSuccess);
      setTitle("");
      setCategory("");
      setSelectedImage("");
      setFolderId("");
      setAccess("");
      setDescription("");
    } else return toast.error("Cannot Allow Empty Fields");
  };


  // console.log(formBookReducer?.user);
  // console.log(userReducer);

  return (
    <>
      <div className="container-fluid bg-white mt-5 pb-5 px-sm-5">
        <div className="row">
          <div className="col-12">
            <h2>Basic Validation</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="pl-3 text-dark">Title</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Search By Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="pl-3 text-dark">Category</label>

                <select
                  className="d-flex justify-content-center w-100 align-items-center"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categoriesReducer?.user.map((item, index) => {
                    return (
                      <option key={index} value={item?._id}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="pl-3 text-dark">Description</label>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="pl-3 text-dark">Folder ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Folder ID"
                  onChange={(e) => setFolderId(e.target.value)}
                  value={folderId}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="pl-3 text-dark">Access</label>
                <select
                  className="form-control"
                  onChange={(e) => setSelectedAccess(e.target.value)}
                  value={selectedAccess}
                >
                  <option value="paid">Paid</option>
                  <option value="free">Free</option>
                </select>
              </div>
            </div>

            <div className="App">
              <h4 style={{ color: "red" }}>Image Upload</h4>

              <p className="title" style={{ color: "red" }}>
                Select Image:
              </p>
              <div>
                <input
                  style={{ marginBottom: "20px" }}
                  accept=""
                  type="file"
                  onChange={imageChange}
                />

                {!showImage ? (
                  <>
                    {selectedImage && (
                      <div className="afterUpload">
                        <img
                          className="uploadImage mb-2"
                          src={URL.createObjectURL(selectedImage)}
                          alt="Thumb"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <>
            <br />
          </>
          {update ? (
            <button className="btn btn-success" onClick={updateBook}>
              Update
            </button>
          ) : (
            <button className="btn btn-primary mt-3" onClick={addBook}>
              Add Book
            </button>
          )}
          <br />
        </form>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Folder ID</th>
            <th scope="col">Book Image</th>
            <th scope="col">Edit Book</th>
            <th scope="col">Delete Book</th>
          </tr>
        </thead>
        {!formBookReducer?.user.length ? (
          <tbody>
            <tr>
              <th scope="row">Data Not Recorded</th>
              <td>Data Not Recorded</td>
              <td className="desc">Data Not Recorded</td>
              <td>Data Not Recorded</td>
              <td>Data Not Recorded</td>
              <td>Data Not Recorded</td>
              <td>Data Not Recorded</td>
            </tr>
          </tbody>
        ) : (
          formBookReducer?.user?.map((item, index) => {
            {/* console.log(item?._id, "BOOK ID") */}
            return (
              <tbody key={index}>
                <tr>
                  <th
                    style={{ cursor: "pointer" }}
                    scope="row"
                    onClick={() => {
                      history.push(`/seasonlist/${item?._id}`);
                    }}
                  >
                    <button className="btn btn-success"> {item?.Title} </button>
                  </th>
                  <td>{item?.category?.name}</td>
                  <td className="desc">{item?.Description}</td>
                  <td>{item?.FolderID}</td>
                  <td>
                    <img
                      src={`${base_url}${item?.Cover?.name}`}
                      alt="profileImage"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </>
  );
};

const mapStateToProps = ({userReducer, categoriesReducer, formBookReducer }) => {
  return { categoriesReducer, formBookReducer, userReducer };
};

export default connect(mapStateToProps, actions)(FormValidation);
