import React from 'react';
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import s from './login.module.css';

let Login = props => {
  const { handleSubmit } = props

  if (props.isAuth) return <Redirect to="/profile"/>
  return (
    <form onSubmit={handleSubmit}>{
      <div className={s.form}>
        <div>
          <Field name="email" component="input" type="text" placeholder="Email"/>
        </div>
        <div>
          <Field name="password" component="input" type="text" placeholder="Password"/>
        </div>
        <div>
          <Field name="rememberMe" component="input" type="checkbox" />remember me
        </div>
        { props.error && <div className={s.formSummaryError}>
          {props.error}
        </div> }
        <button type="submit">Login</button>
      </div>
    }</form>
  )
}

Login = reduxForm({
  form: 'login'
})(Login)

export default Login;