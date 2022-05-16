import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Shared/Layout";
import Login from "./components/Authentication/login";
import SignUp from "./components/Authentication/signup";
import ForgotPassword from "./components/Authentication/forgotpassword";
import NotFound from "./components/Authentication/404";
import Maintenance from "./components/Authentication/maintenance";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userReducer from "./redux/reducers/userReducer";
import { persistor, store } from "./redux/reducers/rootReducer";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    const {
      themeColor,
      fontStyle,
      lightVersion,
      RtlVersion,
      offcanvas,
      miniSidebar,
      horizontalMenu,
      miniHover,
    } = this.props;
    document.getElementsByTagName(
      "body"
    )[0].className = `${themeColor} ${fontStyle}${
      lightVersion ? " light_version" : ""
    }${RtlVersion ? " rtl" : ""}${offcanvas ? " offcanvas-active" : ""}${
      horizontalMenu ? " h-menu" : ""
    }${miniSidebar ? " mini_sidebar" : ""}${miniHover ? " mini_hover" : ""}`;
    return (
      <>
        <div
          ref={(leftSidebar) => {
            this.leftSidebar = leftSidebar;
          }}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router>
                <Switch>
                  {/* <Route path="/signup" component={SignUp} /> */}

                  <Route path="/login" component={Login} />
                  {/* <Route path="/forgotpassword" component={ForgotPassword} /> */}
                  <Route path="/notfound" component={NotFound} />
                  {/* <Route path="/maintenance" component={Maintenance} /> */}
                  <Route component={Layout} />
                </Switch>
              </Router>
            </PersistGate>
          </Provider>
        </div>
        <ToastContainer position="top-center" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  themeColor: state.settings.themeColor,
  fontStyle: state.settings.fontStyle,
  lightVersion: state.settings.lightVersion,
  RtlVersion: state.settings.RtlVersion,
  offcanvas: state.settings.offcanvas,
  horizontalMenu: state.settings.horizontalMenu,
  miniSidebar: state.settings.miniSidebar,
  miniHover: state.settings.miniHover,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App
