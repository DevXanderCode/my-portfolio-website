import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
// List Components
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // ListSubheader,
  // Link,
} from "@material-ui/core";
// Icons
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const ListItemLink = (props) => {
  return <ListItem button component={RouterLink} {...props} />;
};

const SideBar = () => {
  return (
    <List>
      <ListItemLink to='/admin'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemLink>
      <ListItemLink to='/admin/posts'>
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText primary='Posts' />
      </ListItemLink>
      <ListItemLink to='/admin/users'>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary='Users' />
      </ListItemLink>
    </List>
  );
};

export default SideBar;
