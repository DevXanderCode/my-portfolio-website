import * as React from "react";
// List Components
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
// Icons
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const SideBar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText primary='Posts' />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary='Users' />
      </ListItem>
    </List>
  );
};

export default SideBar;
