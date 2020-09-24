import React, { ReactNode } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import "./FormikSelect.css";

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  label: string;
  name: string;
  items: FormikSelectItem[];
  required?: boolean;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  children: ReactNode;
  label: string;
  errorString?: string;
  required: boolean;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  label,
  children,
  errorString,
  value,
  name,
  onBlur,
  onChange,
  required,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} value={value} onBlur={onBlur} onChange={onChange}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  label,
  name,
  items,
  required = false,
  ...props
}) => {
  return (
    <div className='formikSelect'>
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required
      >
        {items.map(({ label, value }, i) => (
          <MenuItem key={i} value={value}>
            {label}
          </MenuItem>
        ))}
      </Field>
      {/* <MaterialUISelectField label={label} errorString='Test Test Test'>
        {items.map(({ label, value }, i) => (
          <MenuItem key={i} value={value}>
            {label}
          </MenuItem>
        ))}
      </MaterialUISelectField> */}
      {/* <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select>
          {items.map(({ label, value }, i) => (
            <MenuItem key={i} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required!</FormHelperText>
      </FormControl> */}
    </div>
  );
};

export default FormikSelect;
