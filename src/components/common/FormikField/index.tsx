import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField } from "@material-ui/core";
import "./FormikField.css";

interface FormikFieldProps {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  required = false,
  type = "text",
  ...props
}) => {
  return (
    <div className='formikField'>
      <Field
        required={required}
        name={name}
        as={TextField}
        autoComplete='off'
        label={label}
        type={type}
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default FormikField;
