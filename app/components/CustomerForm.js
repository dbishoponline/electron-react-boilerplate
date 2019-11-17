// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomerForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Field type="address_street" name="address_street" />
          <ErrorMessage name="address_street" component="div" />

          <Field type="address_city" name="address_city" />
          <ErrorMessage name="address_city" component="div" />

          <Field type="address_state" name="address_state" />
          <ErrorMessage name="address_state" component="div" />

          <Field type="address_zip" name="address_zip" />
          <ErrorMessage name="address_zip" component="div" />

          <Field type="business_type" name="business_type" />
          <ErrorMessage name="business_type" component="div" />

          <Field type="contact_primary_firstname" name="contact_primary_firstname" />
          <ErrorMessage name="contact_primary_firstname" component="div" />

          <Field type="contact_primary_lastname" name="contact_primary_lastname" />
          <ErrorMessage name="contact_primary_lastname" component="div" />

          <Field type="contact_primary_email" name="contact_primary_email" />
          <ErrorMessage name="contact_primary_email" component="div" />

          <Field type="contact_primary_role" name="contact_primary_role" />
          <ErrorMessage name="contact_primary_role" component="div" />


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CustomerForm;
