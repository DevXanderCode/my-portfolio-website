import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// Drawer import
import { Drawer, IconButton, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Component
import SideBar from "../common/SideBar";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpace: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    whiteSpace: "noWrap",
    position: "relative",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: theme.spacing.unit * 7,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainContent: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100%",
    overflow: "auto",
    paddingLeft: "10px",
  },
});

const Dashboard = ({ auth: { token }, classes, ...props }) => {
  const [drawerState, setDrawerState] = React.useState({ open: true });

  const handleDrawerOpen = (e) => {
    setDrawerState({ open: true });
  };

  const handleDrawerClose = (e) => {
    setDrawerState({ open: false });
  };
  return (
    <div style={{ padding: "0", margin: "0" }} className={classes.root}>
      <AppBar
        className={classNames(
          classes.appBar,
          drawerState.open && classes.appBarShift
        )}
      >
        <Toolbar classes={classes.toolbar}>
          <IconButton onClick={(e) => handleDrawerOpen(e)}>
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !drawerState.open && classes.drawerPaperClose
          ),
        }}
        variant='permanent'
        open={drawerState.open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={(e) => handleDrawerClose(e)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SideBar />
      </Drawer>
      <main className={classes.mainContent}>
        <div className={classes.appBarSpace} />
        <h3>You are Logged in with token {token}</h3>
      </main>
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
