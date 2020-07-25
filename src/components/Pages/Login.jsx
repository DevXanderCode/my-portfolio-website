import React from "react";
import Field from "../common/Field";
import * as YUP from "yup";
import { withFormik } from "formik";

const fields = [
    {name: "email", elementName: "input", type: "email", placeholder: "Your email"},
    {name: "password", elementName: "input", type: "password", placeholder: "Your password"},
];

const loginPageStyle = {
    width: "50%" ,margin: "auto", 
    border: "1px groove rgba(122,122, 122, 0.4)", 
    backgroundImage: "linear-gradient(180deg, #555,rgba(118,118,118, .8))",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.5)" 
};

const Login = ({handleChange, handleSubmit, handleBlur, touched, errors, values }) => {
    return( 
        <div className="login-page" style={{ ...loginPageStyle }}>
            <div className="container">
                <div className="login-form" style={{ padding: "1rem"}}>
                    <h1 style={{textAlign: "center", color: "white"}}>Login</h1>
                        <form >
                            {fields.map((field, idx) => (
                                <Field {...field} 
                                key={idx} 
                                value={values[field.name]} 
                                onChange={handleChange} 
                                name={field.name}
                                onBlur={handleBlur}
                                touched={(touched[field.name])}
                                errors={errors[field.name]}
                                />))
                            }
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button 
                                id="LoginButton" 
                                className="btn btn-success btn-xl text-uppercase" 
                                type="submit"
                                onClick={handleSubmit}
                                >
                                Login
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    validationSchema: YUP.object().shape({
        email: YUP.string().email("please enter a valid email").required("Please you need to login with an email address"),
        password: YUP.string().required("please enter your Password")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert(JSON.stringify(values));
        console.log("form values are: ", values)
    }
})(Login);