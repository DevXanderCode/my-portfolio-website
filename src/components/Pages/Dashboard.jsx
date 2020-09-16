import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// Drawer import
import { Drawer, List, ListItem, IconButton, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const drawerWidth = 240;

const styles = (theme) => ({
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
    <div style={{ padding: "0", margin: "0" }}>
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
