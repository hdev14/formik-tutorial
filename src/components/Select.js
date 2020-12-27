import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={field.id || field.name}>
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Select;
