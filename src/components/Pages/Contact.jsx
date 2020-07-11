import React  from "react";
import {withFormik} from "formik";

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
    // const [formValue, setFormValue] = useState({ name: "", email: "", phone: "", message: "" });
    // let {name, email, phone, message } = formValue;
    
    // const usePrevious = (value) => {
    //     const ref = useRef(value);
    //     useEffect(() => {
    //       ref.current = value;
    //     });
    //     return ref.current;
    //   }

    // const prevState = usePrevious(formValue);

    // const submitForm = (e) => {
    //   e.preventDefault();
    //   alert("form submitted thank you");
    // }
    // console.log(formValue);
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
                              // value={formValue[field.name]}
                              // formValue={formValue}
                              // onChange={(e) => setFormValue({
                              //    ...prevState, [field.name] : e.target.value,}, e.persist())}
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
  validate: (values) => {
    const errors = {};
    Object.keys(values).map((value) => {
      if(!values[value]){
        errors[value] = `The ${value} field is Required`;
      }
    })
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    alert(JSON.stringify(values));
    console.log("values", values);
  }
})(Contact);