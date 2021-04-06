import {reset} from 'redux-form';

const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
	dialog: [
		{ name: "Andrey", id: 1 },
		{ name: "Dmitry", id: 2 },
		{ name: "Anatoliy", id: 3 },
	],
	messages: [
		{ id: 1, text: "Hey!" },
		{ id: 2, text: "How are you?" },
		{ id: 3, text: "LOL" },
		{ id: 4, text: "Good bye" },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let messagesId = state.messages.length + 1
			return {
				...state,
				messages: [...state.messages, { id: messagesId, text: action.text }],
			};
		default:
			return state;
	};
};

export const addMessage = (text) => (dispatch) => {
	dispatch(addMessageText(text));
	dispatch(reset('newMessage'));
};

export const addMessageText = (text) => {
	return { type: ADD_MESSAGE, text };
};

export default dialogsReducer;