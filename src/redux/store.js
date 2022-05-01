import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from "./root-reducer";

const applyMiddlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...applyMiddlewares));
export const persistor = persistStore(store);

export default { store, persistor };