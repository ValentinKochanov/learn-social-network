import appReducer, { setInitialized } from "./app-reducer";


it("initialized", () => {
	const action = setInitialized();
	const state = {
		initialized: false
	};
	const newState = appReducer(state, action);
	expect(newState.initialized).toBeTruthy();
});