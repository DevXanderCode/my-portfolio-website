import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";

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
    <div className='form-group input'>
      {name === "email" ? (
        <div style={{ display: "flex" }}>
          <MailOutlineIcon
            style={{
              height: "auto",
              borderBottom: "1px solid #ced4da",
            }}
          />
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
            style={{
              borderWidth: "0",
              borderBottomWidth: "1px",
              backgroundColor: "transparent",
              borderRadius: "0",
              outline: "none !important",
              outlineWidth: "0",
            }}
          />
        </div>
      ) : name === "password" ? (
        <div style={{ display: "flex" }}>
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
            style={{
              borderWidth: "0",
              borderBottomWidth: "1px",
              backgroundColor: "transparent",
              borderRadius: "0",
            }}
          />
          <VisibilityIcon
            style={{
              height: "auto",
              borderBottom: "1px solid #ced4da",
            }}
          />
        </div>
      ) : elementName === "input" ? (
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
          style={{
            borderWidth: "0",
            borderBottomWidth: "1px",
            backgroundColor: "transparent",
            borderRadius: "0",
          }}
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
          <span style={{ fontSize: "1.2rem", color: "red" }}>{errors}</span>
        )}
      </p>
    </div>
  );
};

export default Field;
