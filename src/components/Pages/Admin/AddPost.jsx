import * as React from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../../store/actions/adminActons";
import {
  paper,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

const AddPost = ({ ...props }) => {
  return (
    <div>
      <h1>Add Posts</h1>
    </div>
  );
};

export default AddPost;
