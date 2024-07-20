import React, { useState, useEffect } from 'react';
import './booking.css';
import NavigationBar from '../Navigation-bar';
import Footer from '../Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
});

export default function Booking() {
  const location = useLocation();
  const trainer = location.state.trainer;
  console.log(trainer);
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    trainer: trainer.name,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values);

    // Call the getdata function to send the data
    await getdata(values);

    // Reset the form
    resetForm();
    setSubmitting(false);
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
      const res = await fetch('https://vitality-vault-dbfb4-default-rtdb.europe-west1.firebasedatabase.app/TrainerBooking.json', options);
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
    <div>
      <NavigationBar />
      <Formik
        initialValues={member}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form method='POST' className='bookingForm'>
            <h1 className='form-title'>Trainer Booking Form</h1>
            <label htmlFor="firstName">First Name <sup>*</sup></label>
            <Field type="text" name="firstName" placeholder='First' />
            <ErrorMessage name="firstName" component="div" className="error" />

            <label htmlFor="lastName">Last Name <sup>*</sup></label>
            <Field type="text" name="lastName" placeholder='Last' />
            <ErrorMessage name="lastName" component="div" className="error" />

            <label htmlFor="email">Email <sup>*</sup></label>
            <Field type="email" name="email" placeholder='Email' />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="phone">Phone <sup>*</sup></label>
            <Field type="tel" name="phone" placeholder='+254757625587' />
            <ErrorMessage name="phone" component="div" className="error" />

            <label htmlFor="location">Location(County) <sup>*</sup></label>
            <Field type="text" name="location" placeholder='Location' />
            <ErrorMessage name="location" component="div" className="error" />

            <label htmlFor="date">Preferred Date <sup>*</sup></label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />

            <label htmlFor="time">Preferred Time <sup>*</sup></label>
            <Field type="time" name="time" />
            <ErrorMessage name="time" component="div" className="error" />
            <label htmlFor="trainer">Trainer Name <sup>*</sup></label>
            <Field type="text" name="trainer" value={trainer.name} />
            <ErrorMessage name="trainer" component="div" className="error" />

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

