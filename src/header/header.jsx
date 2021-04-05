import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Logout = (props) => {
	return (
		<div>
			<div>{props.login}</div>
			<button onClick={props.logout}>logout</button>
		</div>
	)
}

const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.login}>
				{props.isAuth ? <Logout login={props.login} logout={props.LogoutThC} />
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</div>
	)
}

export default Header;