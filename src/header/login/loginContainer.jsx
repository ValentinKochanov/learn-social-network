import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import { LoginThC } from '../../redux/auth-reducer';

class LoginContainer extends React.Component {

	submit = values => {
    this.props.LoginThC(values.email, values.password, values.rememberMe)
  }

	render() {
		return <Login onSubmit={this.submit} isAuth={this.props.isAuth}/>
	}
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { LoginThC })(LoginContainer);