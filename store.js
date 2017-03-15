import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers';
import envReducer from './reducers/env';

export const initStore = (initialState, isServer) => {
	if (isServer && typeof window === 'undefined') {
		const initState = initialState || {
			env: envReducer()
		};
		return instantiateStore(initState, compose);
	} else {
		if(!window.store) {
			window.store = instantiateStore(initialState);
		}
		return window.store;
	}
};

const instantiateStore = (initialState, composeEnhancer) => {
	let enhancer = compose(applyMiddleware(thunkMiddleware));
	if(initialState && initialState.env &&
			initialState.env.nodeEnv !== "production") {
		const composer = composeEnhancer || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
		enhancer =  composer(
			applyMiddleware(
				thunkMiddleware,
				createLogger()
			)
		);
	}
	return createStore(reducer, initialState, enhancer);
};

