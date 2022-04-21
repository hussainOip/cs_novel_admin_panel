import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/actions/userAction";
import userReducer from "../../redux/reducers/userReducer";

const FormValidation = ({ userLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const onSuccess=()=>{
    history.push("/")
  }

  const signIn = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
      type: "admin",
    };
    userLogin(data,onSuccess)
  };

  return (
    <>
      <div className="pattern">
        <span className="red"></span>
        <span className="indigo"></span>
        <span className="blue"></span>
        <span className="green"></span>
        <span className="orange"></span>
      </div>
      <div className="auth-main particles_js">
        <div className="auth_div vivify popIn">
          <div className="auth_brand">
            <Link className="navbar-brand" to="/" style={{ color: "black" }}>
              {/* <img
                src="../assets/images/icon.png"	
                width="30"
                height="30"
                className="d-inline-block align-top mr-2"
                alt="Oculux logo"
              /> */}
              Coverage Master Admin
            </Link>
          </div>
          <div className="card">
            <div className="body">
              <p className="lead">Login to your account</p>
              <form
                className="form-auth-small m-t-20"
                onSubmit={signIn}
                // action="/"
              >
                <div className="form-group">
                  <label
                    htmlFor="signin-email"
                    className="control-label sr-only"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control round"
                    id="signin-email"
                    // defaultValue="user@domain.com"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email||""}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="signin-password"
                    className="control-label sr-only"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control round"
                    id="signin-password"
                    // defaultValue="thisisthepassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password||""}
                  />
                </div>
                {/* <NavLink to="/"> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-round btn-block"
                >
                  LOGIN
                </button>
                {/* </NavLink> */}
              </form>
            </div>
          </div>
        </div>
        <div id="particles-js"></div>
      </div>
    </>
  );
};
const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, actions)(FormValidation);
