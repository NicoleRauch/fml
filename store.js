import { createStore } from 'redux';

export const initStore = (reducer, initialState, isServer) => {
	if (isServer && typeof window === 'undefined') {
		return createStore(reducer, initialState);
	} else {
		if(!window.store) {
			window.store = createStore(reducer, initialState);
		}
		return window.store
	}
}

