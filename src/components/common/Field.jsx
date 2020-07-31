import React from "react";

const Field = ({
  name,
  elementName,
  type,
  placeholder,
  onChange,
  onBlur,
  touched,
  errors,
  value,
}) => {
  return (
    <div className='form-group'>
      {elementName === "input" ? (
        <input
          name={name}
          className='form-control'
          id={name}
          type={type}
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          required='required'
          data-validation-required-message='Please enter your name.'
        />
      ) : (
        <textarea
          className='form-control'
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          // onChange={(e) => onChange(e)}
          placeholder={placeholder}
          required='required'
          data-validation-required-message='Please enter a message.'
        />
      )}
      {/* {console.log(formValue)} */}
      <p className='help-block text-danger'>
        {touched && errors && (
          <span style={{ fontSize: "1.2rem", color: "yellow" }}>{errors}</span>
        )}
      </p>
    </div>
  );
};

export default Field;
