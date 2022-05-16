import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/bookActions";
import userReducer from "../../redux/reducers/userReducer";

const Chapter = ({
  userReducer,
  createChapter,
  chapterReducer,
  getAllChapters,
  updateChapter
}) => {
  const [name, setName] = useState();
  const param = useParams();
  const history = useHistory()
  const [update,setUpdate]=useState(false)


  console.log(param);
  // console.log();

  // const seasonID= param.seasonId

  const token = userReducer.accessToken


  useEffect(() => {
    getAllChapters(param.seasonId,param.bookId,token);
  }, []);

const afterCreate=()=>{
  getAllChapters(param.seasonId,param.bookId,token)
}

  const onSubmit = () => {
    // const Re= `/Chapter (?:[1234567890])/-title(?:[1234567890])/`
    // console.log(name.search(Re));
    
    let createdData = {
      chapter: name.trim(),
      book: param.bookId.trim(),
      season: param.seasonId.trim(),
    };
    // var mystr1 = createdData.chapter.trim()
    // var mystr2 = createdData.book.trim()
    // var mystr3 = createdData.season.trim()
    createChapter(createdData,token).then(afterCreate);
  };

  // console.log(chapterReducer?.user);

  const showDetails=(id)=>{
    history.push(`/chapterdescription/${id}`)
  }

  const editItem=(item)=>{
    setName(item?.name)
    setUpdate(true);
  }

  const updateChapterData=()=>{
    const editData={
      chapter:name,
      book: param.bookId,
      season: param.seasonId
    }
    updateChapter(editData,token)
    setName("")
  }
console.log();
  return (
    <>
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 className="text-center">Chapters Page</h1>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>
      </div>
      {
        update?(
          <button type="submit" className="btn btn-primary" onClick={updateChapterData}>
        Update
      </button>
        ):(
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Create
      </button>
        )
      }
      <div className="row m-t-100">
        <div className="col-md-10 m-auto">
          <h1 className="text-center">Chapter's List</h1>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Created At</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {!chapterReducer?.chapters?.length ? (
          <thead>
            <tr>
              <th scope="row">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
            </tr>
          </thead>
        ) : (
          chapterReducer?.chapters.map((item, index) => {
            {
              {/* console.log(item) */}
            }
            return (
              <tbody key={index}>
                <tr>
                  <th>
                 <button className="btn btn-success"
                 onClick={()=>showDetails(item?._id)}> {item?.name} </button>
                 </th>
                  <td scope="col">{item?.title}</td>
                  <td scope="col">{item?.createdAt}</td>
                  <td>
                    <button className="btn btn-primary"
                    onClick={()=>editItem(item)}>Edit</button>
                  </td>
                  <td>
                  <button className="btn btn-danger">Delete</button>
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

const mapStateToProps = ({ chapterReducer,userReducer }) => {
  return { chapterReducer, userReducer };
};

export default connect(mapStateToProps, actions)(Chapter);
