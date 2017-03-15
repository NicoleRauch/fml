import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import envReducer from './reducers/env';

// NODE_ENV !== "production"
import createLogger from 'redux-logger'
// else
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

export const initStore = (initialState, isServer) => {
	if (isServer && typeof window === 'undefined') {
		const initState = initialState || {
			env: envReducer()
		};
		return instantiateStore(initState, compose);
	} else {
		if(!window.store) {
			window.store = instantiateStore(initialState, compose);
		}
		return window.store;
	}
};

const instantiateStore = (initialState, composeEnhancer) => {
	let enhancer = compose(applyMiddleware(thunkMiddleware));
	let reducer = reducers;
	let composer = composeEnhancer;
	let engine;
	if(initialState && initialState.env &&
			initialState.env.nodeEnv !== "production") {
		composer = composeEnhancer || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
		enhancer =  composer(
			applyMiddleware(
				thunkMiddleware,
				createLogger()
			)
		);
	} else {
		reducer = storage.reducer(reducers);
		engine = createEngine('fml');
		const middleware = storage.createMiddleware(engine);
		enhancer =  composer(
			applyMiddleware(
				thunkMiddleware,
				createLogger(),
				middleware
			)
		);
	}
	const store = createStore(reducer, initialState, enhancer);
	if(engine && initialState.env.nodeEnv === "production") {
		const load = storage.createLoader(engine);
		load(store);
	}
	return store;
};

