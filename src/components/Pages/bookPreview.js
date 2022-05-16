import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/bookActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import userReducer from "../../redux/reducers/userReducer";

const BookPreview = ({
  userReducer,
  getSeasons,
  seasonReducer,
  createSeasons,
  deleteSeason,
  updateSeason,
}) => {
  const [name, setName] = useState();
  const [season, setSeason] = useState();
  const [update, setUpdate] = useState(false);
  const [seasonId, setSeasonId] = useState();
  const params = useParams();

  const history = useHistory();
  const id = params;

  const token = userReducer.accessToken;

  useEffect(() => {
    getSeasons(id.id, token);
  }, []);

  const afterCreate = () => {
    getSeasons(id.id, token);
  };
  const onSubmit = () => {
    let createData = {
      name: name,
      book: id.id,
      season: season,
    };
    createSeasons(createData, token).then(afterCreate);
  };

  const afterDelete = () => {
    getSeasons(id.id, token);
  };

  const deleteItem = (id) => {
    deleteSeason(id, token).then(afterDelete());
  };

  const editItem = (item) => {
    setUpdate(true);
    setSeasonId(item?._id);
    setName(item?.name);
    setSeason(item?.season);
  };

  const onSuccess = () => {
    getSeasons(id.id, token);
  };

  const updateSeasonData = () => {
    setSeason("");
    setName("");
    const editSeasonData = {
      name: name,
    };
    updateSeason(seasonId, editSeasonData, token).then(onSuccess);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 className="text-center">Create Season</h1>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Season</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter Season"
            onChange={(e) => setSeason(e.target.value)}
            value={season || ""}
          />
        </div>
      </div>
      {update ? (
        <button
          type="submit"
          className="btn btn-success"
          onClick={updateSeasonData}
        >
          Update
        </button>
      ) : (
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      )}
      <div className="row m-t-100">
        <div className="col-md-10 m-auto">
          <h1 className="text-center">Season's List</h1>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Key</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {!seasonReducer?.season.length ? (
          <thead>
            <tr>
              <th scope="row">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
              <th scope="col">Data Not Recorded</th>
            </tr>
          </thead>
        ) : (
          seasonReducer?.season.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      history.push(`/chapter/${item?._id}/bookId/${id.id}`);
                    }}
                  >
                    <button className="btn btn-success"> {item?.name} </button>
                  </th>
                  <td scope="col">{item?.season}</td>
                  <td scope="col">
                    <button
                      className="btn btn-primary"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td scope="col">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item?._id)}
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

const mapStateToProps = ({ seasonReducer, userReducer }) => {
  return { seasonReducer, userReducer };
};
export default connect(mapStateToProps, actions)(BookPreview);
