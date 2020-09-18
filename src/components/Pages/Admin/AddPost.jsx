import * as React from "react";
import { connect } from "react-redux";
import { paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withFormik, Form } from "formik";
import { FormikTextField } from "formik-material-fields";
import * as YUP from "yup";
import * as AdminActions from "../../../store/actions/adminActons";

const styles = (theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
  },
});

const AddPost = ({
  classes,
  values,
  setFieldValue,
  setFieldTouched,
  ...props
}) => {
  return (
    <div className={classes.container}>
      {console.log("values: ", values.title)}
      <h1>Add Posts</h1>
      <Form>
        <FormikTextField
          name='title'
          label='Title'
          margin='normal'
          onChange={(e) => {
            return (
              setFieldValue(
                "slug",
                e.target.value.toLowerCase().replace(/ /g, "_")
              ),
              setFieldTouched("slug", true, false)
            );
          }}
          fullWidth
        />
        <FormikTextField
          name='slug'
          // label='Slug'
          placeholder='Slug'
          margin='normal'
        />
        <FormikTextField
          name='content'
          label='content'
          margin='normal'
          fullWidth
        />
      </Form>
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
      content: "",
    }),
    validationSchema: YUP.object().shape({
      title: YUP.string().required("Post Title is Requiured"),
      slug: YUP.string().required(),
      content: YUP.string().required(),
    }),
    handleSubmit: (values, { setSubmittind }) => {},
  })(withStyles(styles)(AddPost))
);
