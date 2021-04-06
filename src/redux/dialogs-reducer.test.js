import dialogsReducer, { addMessageText } from "./dialogs-reducer";

const messageText = "Bla-bla";
const action = addMessageText(messageText);
const state = {
	messages: [
		{ id: 1, text: "Hey!" },
	]
};

it("check id new messages", () => {
	const newState = dialogsReducer(state, action);
	expect(newState.messages[1].id).toBe(2);
});

it("check text new messages", () => {
	const newState = dialogsReducer(state, action);
	expect(newState.messages[1].text).toBe(messageText);
});

it("check length messages", () => {
	const newState = dialogsReducer(state, action);
	expect(newState.messages.length).toBe(2);
});