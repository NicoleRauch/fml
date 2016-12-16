import { combineReducers } from 'redux';
import movies from './movies';
import movieCollections from './movieCollections.js';

const fmlApp = combineReducers({
	movies,
	movieCollections
});

export default fmlApp;

