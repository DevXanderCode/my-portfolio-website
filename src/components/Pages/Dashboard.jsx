import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Dashboard = ({ auth: { token } }) => {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <AppBar>
        <Toolbar>
          <Typography component='h1' variant='h6' color='inherit' noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <h2>You are Logged in with token {token}</h2>
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
