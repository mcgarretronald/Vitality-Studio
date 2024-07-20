import React, { useState, useEffect } from 'react';
import './Membership.css';
import NavigationBar from '../Navigation-bar';
import Footer from '../Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  currentWeight: Yup.number().required('Required'),
  goalWeight: Yup.number().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

export default function Membership() {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values); 

    // Call the getdata function to send the data
    await getdata(values);

    // Reset the form
    resetForm();
    setSubmitting(false);
    setKey(Date.now());
  };

  const getdata = async (values) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };

    try {
      const res = await fetch('https://vitality-vault-dbfb4-default-rtdb.europe-west1.firebasedatabase.app/Membership.json', options);
      if (res.ok) {
        alert('Data sent successfully');
      } else {
        alert('Error sending data');
      }
    } catch (error) {
      alert('Error sending data');
    }
  };

  return (
    <div key={key}>
      <NavigationBar />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          currentWeight: '',
          goalWeight: '',
          email: '',
          phone: '',
          membershipPlan: 'basic'
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form method='POST' className='MembershipForm'>
            <h1 className='form-title'>Gym Membership Form</h1>
            <label htmlFor="firstName">First Name <sup>*</sup></label>
            <Field type="text" name="firstName" placeholder='First' />
            <ErrorMessage name="firstName" component="div" className="error" />

            <label htmlFor="lastName">Last Name <sup>*</sup></label>
            <Field type="text" name="lastName" placeholder='Last' />
            <ErrorMessage name="lastName" component="div" className="error" />

            <label htmlFor="currentWeight">Current Weight <sup>*</sup></label>
            <Field type="number" name="currentWeight" placeholder='Weight in kg' />
            <ErrorMessage name="currentWeight" component="div" className="error" />

            <label htmlFor="goalWeight">Goal Weight <sup>*</sup></label>
            <Field type="number" name="goalWeight" placeholder='Weight in kg' />
            <ErrorMessage name="goalWeight" component="div" className="error" />

            <label htmlFor="email">Email <sup>*</sup></label>
            <Field type="email" name="email" placeholder='Email' />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="phone">Phone <sup>*</sup></label>
            <Field type="tel" name="phone" placeholder='+254757625587' />
            <ErrorMessage name="phone" component="div" className="error" />

            <label htmlFor="membershipPlan">Membership Plan <sup>*</sup></label>
            <Field as="select" name="membershipPlan">
              <option value="basic">Basic Membership</option>
              <option value="standard">Standard Membership</option>
              <option value="premium">Premium Membership</option>
            </Field>

            <button type="submit" className='bookingsubmit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
}

