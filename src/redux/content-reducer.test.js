import contentReducer,
 { addPostText,
	 setStatus, 
	 setUsersProfile, 
	 savePhotoSuccess } from "./content-reducer";


it("add post", () => {
	const action = addPostText("Hello");
	const state = {
		content: [
			{ id: 1, text: "abababa", likeCount: 2 },
			{ id: 2, text: "rthjhgf", likeCount: 2 },
		]
	};
	const newState = contentReducer(state, action);
	expect(newState.content.length).toBe(3);
});


it("set status", () => {
	const newStatus = "My status";
	const action = setStatus(newStatus);
	const state = {
		status: "---"
	};
	const newState = contentReducer(state, action);
	expect(newState.status).toBe(newStatus);
});


it("get user profile", () => {
	const user = {name: "John"};
	const action = setUsersProfile(user);
	const state = {
		profile: null
	};
	const newState = contentReducer(state, action);
	expect(newState.profile).not.toBeNull();
});


it("set photo", () => {
	const usersPhoto = "photo";
	const action = savePhotoSuccess(usersPhoto);
	const state = {
		photo: null
	};
	const newState = contentReducer(state, action);
	expect(newState.photo).not.toBeNull();
});