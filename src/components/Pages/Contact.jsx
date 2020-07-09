import React, { useState } from "react";

const Contact = () => {
    const [formValue, setFormValue] = useState({ name: "", email: "", phone: "", message: "" })
    let {name, email, phone, message } = formValue;
    console.log(formValue);
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        id="name" 
                        type="text" 
                        placeholder="Your Name *" 
                        value={name}
                        onChange={(e) => setFormValue({ name: e.target.value, email, phone, message,  })}
                        required="required" 
                        data-validation-required-message="Please enter your name." 
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        id="email" 
                        type="email"
                        value={email} 
                        onChange={(e) => setFormValue({ email: e.target.value, name, phone, message })}
                        placeholder="Your Email *" 
                        required="required" 
                        data-validation-required-message="Please enter your email address." 
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        id="phone" 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setFormValue({ phone: e.target.value, name, email, message })}
                        placeholder="Your Phone *" 
                        required="required" 
                        data-validation-required-message="Please enter your phone number." 
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea 
                        className="form-control" 
                        id="message" 
                        value={message}
                        onChange={(e) => setFormValue({ message: e.target.value, name, phone, email })}
                        placeholder="Your Message *" 
                        required="required" 
                        data-validation-required-message="Please enter a message."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
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