import { combineReducers } from 'redux';
import movies from './movies';
import lists from './lists';

const fmlApp = combineReducers({
	movies,
	lists
});

export default fmlApp;

