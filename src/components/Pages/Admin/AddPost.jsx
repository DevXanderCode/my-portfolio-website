import * as React from "react";
import { connect } from "react-redux";
import {
  paper,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withFormik } from "formik";
import * as YUP from "yup";
import * as AdminActions from "../../../store/actions/adminActons";

const styles = (theme) => ({
  container: {},
});

const AddPost = ({ classes, ...props }) => {
  return (
    <div className={classes.container}>
      <h1>Add Posts</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  admin: state.admin,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropstoValues: () => ({
      title: "",
      slug: "",
      createdAt: "",
      status: false,
    }),
    validationSchema: YUP.object().shape({
      // title: YUP.string,
    }),
    handleSubmit: (values, { setSubmittind }) => {},
  })(withStyles(styles)(AddPost))
);
