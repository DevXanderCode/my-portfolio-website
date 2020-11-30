import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField } from "@material-ui/core";
import "./FormikField.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";


interface FormikFieldProps {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  showIcon?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  required = false,
  type = "text",
  showIcon = null,
  ...props
}) => {
  let icon = null; 
  if(showIcon){

    if (name === "password") {
      icon = <VisibilityIcon />;
    } else if (name === "email") {
      icon = <MailOutlineIcon />;
    }
  }

  return (
    <div className='formikField d-flex'>
      <Field
        required={required}
        name={name}
        as={TextField}
        autoComplete='off'
        label={label}
        type={type}
        fullWidth
        helperText={<ErrorMessage name={name} />}
        InputProps={{
          endAdornment: icon
        }}
      />
    </div>
  );
};

export default FormikField;
