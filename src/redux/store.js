import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const applyMiddlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...applyMiddlewares));

export default store;