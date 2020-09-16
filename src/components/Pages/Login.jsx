import React from "react";
import Field from "../common/Field";
import * as YUP from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import * as AuthActions from "../../store/actions/authActions";

const fields = [
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Your email",
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your password",
  },
];

const loginPageStyle = {
  minWidth: "40%",
  marginTop: "3%",
  border: "1px groove rgba(122,122, 122, 0.4)",
  // backgroundImage: "linear-gradient(180deg, #555,rgba(118,118,118, .8))",
  boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
  borderRadius: "5px",
  backgroundColor: "#eee",
  padding: "5% 5% 0",
};

const formTitle = {
  textAlign: "center",
  color: "white",
  width: "100%",
  marginBottom: "2.4rem",
  fontSize: "2rem",
};

const initialsStyle = {
  backgroundColor: "rgb(46,46,46)",
  display: "inline",
  padding: "5px 20px 0",
  fontSize: "3rem",
};

const Login = ({
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors,
  values,
  login,
}) => {
  return (
    <div className='login-page' style={{ ...loginPageStyle }}>
      <div className='container' style={{ minWidth: "max-content" }}>
        <div className='login-form' style={{ padding: "1rem" }}>
          <div style={{ ...formTitle }}>
            <h1 style={{ color: "black" }}>Welcome</h1>
            <h1 style={{ ...initialsStyle }}>A</h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(values.email, values.password);
            }}
          >
            {fields.map((field, idx) => (
              <Field
                {...field}
                key={idx}
                value={values[field.name]}
                onChange={handleChange}
                name={field.name}
                onBlur={handleBlur}
                touched={touched[field.name]}
                errors={errors[field.name]}
                // style={{
                //   borderWidth: "0 0 1 0",
                //   backgroundColor: "transparent",
                // }}
              />
            ))}
            <div
              className='col-md-12 text-center'
              style={{ width: "100%", padding: "0" }}
            >
              <button
                id='LoginButton'
                className='btn btn-success text-uppercase'
                type='submit'
                style={{
                  width: "100%",
                  borderRadius: "100px",
                  padding: "4%",
                  backgroundImage:
                    "linear-gradient(60deg, rgb(40,208,245,.8),rgba(127,41,190, .8))",
                  marginTop: "5%",
                }}
              >
                Login
              </button>
              <div style={{ marginTop: "30%" }}>
                <pre>
                  Don't have an Account? <a href='#'> Signup</a>
                </pre>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(AuthActions.login(email, password));
      console.log("logging in user:", email);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),
    validationSchema: YUP.object().shape({
      email: YUP.string()
        .email("please enter a valid email")
        .required("Please you need to login with an email address"),
      password: YUP.string().required("please enter your Password"),
    }),
    // handleSubmit: (values, { setSubmitting }, login) => {
    //   alert(JSON.stringify(values));
    //   // console.log("form values are: ", values);
    //   login(values.email, values.password);
    // },
  })(Login)
);
