import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// Drawer import
import { Drawer, IconButton, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Component
import SideBar from "../components/common/SideBar";

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
    left: 0,
    top: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100%",
    overflow: "auto",
    paddingLeft: "10px",
  },
});

const AdminWrapper = ({ classes, ...props }) => {
  const [drawerState, setDrawerState] = React.useState({ open: true });

  const handleDrawerOpen = (e) => {
    setDrawerState({ open: true });
  };

  const handleDrawerClose = (e) => {
    setDrawerState({ open: false });
  };
  return (
    <div
      id='admin-page'
      style={{
        display: "flex",
        minHeight: "100%",
      }}
    >
      <div style={{ padding: "0", margin: "0" }} className={classes.root}>
        <AppBar
          className={classNames(
            classes.appBar,
            drawerState.open && classes.appBarShift
          )}
        >
          <Toolbar className={classes.toolbar}>
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
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default withStyles(styles)(AdminWrapper);
