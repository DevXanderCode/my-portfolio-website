import React, { useState, useRef, useEffect } from "react";

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

const Contact = () => {
    const [formValue, setFormValue] = useState({ name: "", email: "", phone: "", message: "" });
    // let {name, email, phone, message } = formValue;
    console.log(formValue);
    function usePrevious(value) {
        const ref = useRef(value);
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }

    const prevState = usePrevious(formValue);
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
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row">
                  {fields.sections.map((section, sectionIndex) => 
                    <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => 
                          (<Field 
                              key={i} 
                              {...field}
                              value={formValue[field.name]}
                              formValue={formValue}
                              onChange={(e) => setFormValue({
                                 ...prevState, [field.name] : e.target.value,}, e.persist())}
                            />)
                        )}
                    </div>
                    )
                  }
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    );
}

export default Contact;