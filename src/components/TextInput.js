import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.id || field.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextInput;
