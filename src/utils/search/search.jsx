import React from "react";
import { Field, reduxForm } from 'redux-form';


let Search = (props) => {

  const { handleSubmit } = props

  return <form onSubmit={handleSubmit}>
    <Field name="usersName" component="input" type="text" placeholder="Find by name"/>
    <button type="submit">Search</button>
    </form>
};

Search = reduxForm({
  form: 'search',
})(Search);

export default Search;