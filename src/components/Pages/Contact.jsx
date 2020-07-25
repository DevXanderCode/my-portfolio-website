import React  from "react";
import {withFormik} from "formik";
import * as Yup from "yup";

//re-useable component
import Field from "../common/Field"; 

const fields = {
  sections:[
    [
      {name: "name", elementName: "input", type: "text", placeholder: "Your Name *"},
      {name: "email", elementName: "input", type: "email", placeholder: "Your Email *"},
      {name: "phone", elementName: "input", type: "tel", placeholder: "Your phone *"}
    ],
    [
      {name: "message", elementName: "textarea", type: "text", placeholder: "Your message *"}
    ]
  ],
}

const Contact = ({handleChange, handleSubmit, handleBlur, touched, errors }) => {
    return(
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}  name="sentMessage" noValidate="novalidate">
                <div className="row">
                  {fields.sections.map((section, sectionIndex) => 
                    <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => 
                          (<Field 
                              key={i} 
                              {...field}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              touched={(touched[field.name])}
                              errors={errors[field.name]}
                            />)
                        )}
                    </div>
                    )
                  }
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button 
                      id="sendMessageButton" 
                      className="btn btn-primary btn-xl text-uppercase" 
                      type="submit"
                      >
                        Send Message
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  // validate: (values) => {
  //   const errors = {};
  //   Object.keys(values).map((value) => {
  //     if(!values[value]){
  //       errors[value] = `The ${value} field is Required`;
  //     }
  //   })
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "your name is longer than that")
              .required("please the name field cannot be empty"),
    email: Yup.string()
              .email("Please enter a valid email")
              .required("Please the Email field is Required"),
    phone: Yup.string()
              .required("Please the Phone number field can't be empty")
              .matches(/^[0-9]+$/, "must be numbers")
              .min(10, "please your phone number can't be below 10 digits")
              .max(15, "Please your phone number should not be more than 15 digits"),
    message: Yup.string()
                .min(500, "please provide us with more detailed information")
                .required("Please the message field is required")
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert(JSON.stringify(values));
    console.log("values", values);
  }
})(Contact);