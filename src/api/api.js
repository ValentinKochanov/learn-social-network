import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	headers: {
		"API-KEY": "7c6fc181-8a70-4e32-948d-aca8d55e2c13"
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getUsers = (pageSize, currentPage) => {
	return instance.get(`users?count=${pageSize}&page=${currentPage}`)
		.then(response => response.data)
};

export const Unfollow = (id) => {
	return instance.delete(`follow/${id}`)
		.then(response => response.data)
};

export const Follow = (id) => {
	return instance.post(`follow/${id}`)
		.then(response => response.data)
};

export const authMe = () => {
	return instance.get(`auth/me`)
		.then(response => response.data)
};

export const Logout = () => {
	return instance.post(`auth/logout`)
		.then(response => response.data)
};

export const Login = (email, password, rememberMe) => {
	return instance.post(`auth/login`, { email, password, rememberMe })
		.then(response => response.data)
};

export const userProfile = (userId) => {
	return instance.get(`profile/` + userId)
		.then(response => response.data)
};

export const getStatus = (userId) => {
	return instance.get(`profile/status/` + userId)
		.then(response => response.data)
};

export const updateStatus = (status) => {
	return instance.put(`profile/status`, { status: status })
};      

export const setPhoto = (photo) => {
	const formData = new FormData();
	formData.append("image", photo);
	return instance.put(`/profile/photo`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
};
