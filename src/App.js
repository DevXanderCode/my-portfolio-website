import React from "react";
import PageWrapper from "./components/PageWraper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./components/common/Team";
import { connect } from "react-redux";
// pages
import {
  Home,
  About,
  ServicesPage,
  PortfolioPage,
  Contact,
  Login,
  Dashboard,
} from "./components/Pages";
import AdminWrapper from "./components/AdminWrapper";
// import AdminWrapper from "./components/AdminWrapper";

function App({ auth }) {
  return (
    <Router>
      <Route
        path='/admin'
        render={(props) => (
          <AdminWrapper>
            {auth.token ? <Dashboard {...props} /> : <Login {...props} />}
          </AdminWrapper>
        )}
      />
      <Route
        path='/'
        exact
        render={(props) => (
          <PageWrapper>
            <Home {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path='/about'
        render={(props) => (
          <PageWrapper>
            <About {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path='/services'
        render={(props) => (
          <PageWrapper>
            <ServicesPage {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path='/portfolio'
        render={(props) => (
          <PageWrapper>
            <PortfolioPage {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path='/team'
        render={(props) => (
          <PageWrapper>
            <Team {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path='/contact'
        render={(props) => (
          <PageWrapper>
            <Contact {...props} />
          </PageWrapper>
        )}
      />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
