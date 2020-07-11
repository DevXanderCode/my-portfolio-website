import React from "react";

const Field = ({ name, elementName, type, placeholder, value, onChange, formValue}) => {
    return (
      <div className="form-group">
        {elementName === "input" ? 
         (
            <input 
                className="form-control" 
                id={name} 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                required="required" 
                data-validation-required-message="Please enter your name." 
            />
        ):(
            <textarea 
                className="form-control" 
                id={name} 
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
                required="required" 
                data-validation-required-message="Please enter a message."
                />
            )}{console.log(formValue)}
        <p className="help-block text-danger"></p>
      </div>
    );
}

export default Field;