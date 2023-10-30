import React from "react";
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
  initialValues: {
    email: '',
    password: ''      
  },
  onSubmit: values => {
    if (!formik.errors.email && !formik.errors.password) {
      alert('Login Successful');
      }
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) {
        errors.password = 'Field required';
      }
      return errors;
    }
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
        <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>    
        <div>Password:</div>
        <input type="password" id="pswField" onChange={formik.handleChange} value={formik.values.password}/><br/>
        <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>              
        <button type="submit" id= "submitBtn">Submit</button>
      </form> 
    </div>
  );
}

export default App;
