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
  width: "50%",
  margin: "auto",
  border: "1px groove rgba(122,122, 122, 0.4)",
  backgroundImage: "linear-gradient(180deg, #555,rgba(118,118,118, .8))",
  boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
  borderRadius: "5px",
};

const formTitle = {
  textAlign: "center",
  color: "white",
  width: "100%",
  marginBottom: "2.4rem",
  fontSize: "2rem",
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
      <div className='container'>
        <div className='login-form' style={{ padding: "1rem" }}>
          <h1 style={{ ...formTitle }}>Login</h1>
          <form>
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
                onClick={(e) => {
                  e.preventDefault();
                  login(values.email, values.password);
                }}
                style={{ width: "100%" }}
              >
                Login
              </button>
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
