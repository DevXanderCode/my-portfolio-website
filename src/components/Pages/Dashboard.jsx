import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// Drawer import
import { Drawer, List, ListItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const styles = (theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerPaper: {
    width: drawerWidth,
    whiteSpace: "noWrap",
    position: "relative",
  },
});

const Dashboard = ({ auth: { token }, classes, ...props }) => {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <AppBar className={classes.appBar}>
        <Toolbar classes={classes.toolbar}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        variant='permanent'
        open={true}
      >
        <List>
          <ListItem>Dashboard</ListItem>
        </List>
      </Drawer>
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
)(withRouter(withStyles(styles)(Dashboard)));
