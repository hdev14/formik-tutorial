import React from 'react';
import ReactDOM from 'react-dom';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import './styles.css';

const validationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
  jobType: Yup.string().oneOf(['design', 'development', 'product', 'other'], 'Invalid Job Type').required('Required'),
});

const SignupForm = () => (
  <>
    <h1>Subscribe!</h1>
    <Formik
      initialValues={{
        firstName: '', lastName: '', email: '', acceptedTerms: false, jobType: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          placeholder="Jane"
          type="text"
        />

        <TextInput
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          type="text"
        />

        <TextInput
          label="Email Address"
          name="email"
          placeholder="jane@email.com"
          type="email"
        />

        <Select label="Job Type" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </Select>

        <Checkbox name="acceptedTerms">
          I accept the terms and conditions
        </Checkbox>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
