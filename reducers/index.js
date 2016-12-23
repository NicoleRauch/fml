import { combineReducers } from 'redux';
import movies from './movies';
import movieCollections from './movieCollections.js';
import rate from './rate.js';

const fmlApp = combineReducers({
	movies,
	movieCollections,
	rate
});

export default fmlApp;

