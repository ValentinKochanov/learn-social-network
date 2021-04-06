import { getStatus, updateStatus, userProfile, setPhoto } from '../api/api';
import {reset} from 'redux-form';

const SET_PHOTO = "SET_PHOTO";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
	content: [
		{ id: 1, text: "abababa", likeCount: 2 },
		{ id: 2, text: "rthjhgf", likeCount: 2 },
	],
	profile: null,
	status: "---",
	photo: null,
}

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let contentId = state.content.length + 1;
			return {
				...state,
				content: [ { id: contentId, text: action.text, likeCount: 0 }, ...state.content],
			};
		case SET_USERS_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status
			};
		case SET_PHOTO:
			return {
				...state,
				photo: action.photo
			};
		default:
			return state;
	};
};

export const addPost = (text) => (dispatch) => {
	dispatch(addPostText(text));
	dispatch(reset('newPosts'));
};

export const addPostText = (text) => ({ type: ADD_POST, text });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const savePhotoSuccess = (photo) => ({ type: SET_PHOTO, photo});

export const getUserProfileThC = (userId) => (dispatch) => {
	userProfile(userId).then(data => {
		dispatch(setUsersProfile(data))
	});
};

export const savePhoto = (photo) => (dispatch) => {
	setPhoto(photo).then(data => {
		if (data.resultCode === 0) {
			dispatch(savePhotoSuccess(data.data.photo))
		};
	});
};

export const getStatusThC = (userId) => (dispatch) => {
	getStatus(userId).then(data => {
		dispatch(setStatus(data))
	});
};

export const updateStatusThC = (status) => (dispatch) => {
	updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		};
	});
};

export default contentReducer;