import { combineReducers } from 'redux';
import movieCollections from './movieCollections.js';
import rate from './rate/';
import env from './env.js';

export default combineReducers({
	movieCollections,
	rate,
	env
});

