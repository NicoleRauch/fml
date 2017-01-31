import { combineReducers } from 'redux';
import process from './process.js';
import personalMovieList from './personalMovieList.js';

const rateReducer = combineReducers({
	process,
	personalMovieList
});

export default rateReducer;

