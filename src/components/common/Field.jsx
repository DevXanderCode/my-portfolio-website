import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";

const iconContainer = {
  display: "flex",
  borderBottom: "1px solid #ced4da",
  alignItems: "center",
};

const input = {
  borderWidth: "0",
  borderBottomWidth: "1px",
  backgroundColor: "transparent",
  borderRadius: "0",
  outline: "none !important",
  outlineWidth: "0",
};

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
          <div style={{ ...iconContainer }}>
            <MailOutlineIcon />
          </div>
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
            style={{ ...input }}
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
            style={{ ...input }}
          />
          <div style={{ ...iconContainer }}>
            <VisibilityIcon style={{ cursor: "pointer" }} />
          </div>
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
          style={{ ...input }}
        />
      ) : (
        <textarea
          className='form-control'
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required='required'
          data-validation-required-message='Please enter a message.'
        />
      )}
      <p className='help-block text-danger'>
        {touched && errors && (
          <span style={{ fontSize: "1.2rem", color: "red" }}>{errors}</span>
        )}
      </p>
    </div>
  );
};

export default Field;
