import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({ auth: { token }, ...props }) => {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <h4>You are Logged in with token {token}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
