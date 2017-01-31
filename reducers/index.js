import { combineReducers } from 'redux';
import movieCollections from './movieCollections.js';
import rate from './rate/';

export default combineReducers({
	movieCollections,
	rate
});

