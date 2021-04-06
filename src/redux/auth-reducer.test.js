import authReducer, { setAuthUsersData } from "./auth-reducer";


const state = {
	id: null,
	login: null,
	email: null,
	isAuth: false
};

const email = "qwerty@gmail.com";
const id = 42;
const login = "password";
const isAuth = true;

const action = setAuthUsersData(email, id, login, isAuth);

const newState = authReducer(state, action);

it("correct id", () => {
	expect(newState.id).toBe(id);
});

it("correct login", () => {
	expect(newState.login).toBe(login);
});

it("correct email", () => {
	expect(newState.email).toBe(email);
});

it("correct isAuth", () => {
	expect(newState.isAuth).toBeTruthy();
});