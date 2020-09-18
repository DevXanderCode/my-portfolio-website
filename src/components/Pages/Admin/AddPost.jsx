import * as React from "react";
import { connect } from "react-redux";
import { Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { withFormik, Form } from "formik";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import * as YUP from "yup";
import * as AdminActions from "../../../store/actions/adminActons";

const styles = (theme) => ({
  container: {
    margin: theme.spacing(1),
  },
  formControl: {
    // margin: theme.spacing(1),
    display: "flex",
    flexDirection: "row wrap",
    width: "100%",
  },
  leftSide: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    flex: 2,
    height: "100%",
  },
  rightSide: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    flex: 1,
    height: "100%",
  },
});

const AddPost = ({
  classes,
  values,
  setFieldValue,
  setFieldTouched,
  handleSubmit,
  isValid,
  ...props
}) => {
  return (
    <div className={classes.container}>
      <h1>Add Posts</h1>

      <Form className={classes.formControl}>
        <Paper className={classes.leftSide}>
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
        </Paper>
        <Paper className={classes.rightSide}>
          <FormikSelectField
            name='status'
            label='Status'
            options={[
              { label: "Unpublished", value: `false` },
              { label: "Published", value: `true` },
            ]}
            margin='normal'
            fullWidth
          />
          <Button
            color='secondary'
            variant='contained'
            onClick={(e) => handleSubmit()}
          >
            <SaveIcon />
            Save
          </Button>
        </Paper>
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
    handleSubmit: (values, { setSubmittind }) => {
      console.log("Saving ...");
    },
  })(withStyles(styles)(AddPost))
);
