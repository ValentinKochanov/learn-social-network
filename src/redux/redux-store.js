import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;