import { combineReducers } from 'redux';
import movieCollections from './movieCollections.js';
import rate from './rate.js';

const fmlApp = combineReducers({
	movieCollections,
	rate
});

export default fmlApp;

