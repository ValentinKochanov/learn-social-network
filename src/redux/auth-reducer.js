import { authMe, Logout, Login } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return {
				...state,
				...action.data,
			};
		default:
			return state;
	}
}

export let setAuthUsersData = (email, id, login, isAuth) => ({
	 type: SET_USERS_DATA, data: { email, id, login, isAuth } });

export const LogoutThC = () => (dispatch) => {
	Logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUsersData(null, null, null, false));
		}
	})
}

export const LoginThC = (email, password, rememberMe) => (dispatch) => {
	Login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(authMeThunkCreator());		
		} else {
			dispatch(stopSubmit('login', {_error: data.messages[0]}))
		}
	})
}

export const authMeThunkCreator = () => (dispatch) => {
	authMe().then(data => {
		if (data.resultCode === 0) {
			let { email, id, login } = data.data;
			dispatch(setAuthUsersData(email, id, login, true));
		}
	})
}

export default authReducer;