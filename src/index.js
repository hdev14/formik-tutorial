import React from 'react';
import ReactDOM from 'react-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import './styles.css';

const validationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const SignupForm = () => (
  <Formik
    initialValues={{ firstName: '', lastName: '', email: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field type="text" name="firstName" />
      <ErrorMessage name="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <Field type="text" name="lastName" />
      <ErrorMessage name="lastName" />

      <label htmlFor="email">Email Address</label>
      <Field type="email" name="email" />
      <ErrorMessage name="email" />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
