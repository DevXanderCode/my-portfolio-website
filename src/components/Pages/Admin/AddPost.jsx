import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Form, Formik, withFormik } from "formik";
import { FormikTextField } from "formik-material-fields";
import * as YUP from "yup";
import FormikSelect from "../../common/FormikSelect/index";
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

const initialValues = {
  title: "",
  slug: "",
  createdAt: "",
  status: false,
  content: "",
}

const statusItems = [{ label: 'Published', value: true }, { label: 'Unpulished', value: false }];

const postSchema = YUP.object().shape({
  title: YUP.string().required("Post Title is Requiured"),
  slug: YUP.string().required(),
  content: YUP.string().required(),
});

// const handleSubmit = (values, { setSubmitting, props }) => {
//   e.preventDefault();
//   console.log("Saving ...", props.addPost);
// }

const AddPost = ({
  classes,
  handleSubmit,
  isSubmitting,
  isValid, 
  dirty, 
  setFieldValue,
  values,
  setFieldTouched,
  ...props
}) => {


  return (
    <div className={classes.container}>
      <h1>Add Posts</h1>
            <Form className={classes.formControl} onSubmit={handleSubmit}>
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
                <FormikSelect label='Status' name='status' items={statusItems} required />
                <Button disabled={!isValid || !dirty || isSubmitting}
                  color='secondary'
                  variant='contained'
                  type="submit"
                >
                  <SaveIcon />
                  {isSubmitting ? "Saving" : "Save"}
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

const mapDispatchToProps = (dispatch) => ({
  addPost: (posts, token) => {
    dispatch(AdminActions.addPost(posts, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    ...initialValues
  }),
  validationSchema: postSchema,
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log("saving", props.addPost)
  }
})(withStyles(styles)(AddPost)));
