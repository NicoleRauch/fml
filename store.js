import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers';

export const initStore = (initialState, isServer) => {
	if (isServer && typeof window === 'undefined') {
		return instantiateStore(initialState);
	} else {
		if(!window.store) {
			window.store = instantiateStore(initialState);
		}
		return window.store;
	}
};

const instantiateStore = (initialState) => {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(
			thunkMiddleware,
			createLogger()
		)
	);
};

