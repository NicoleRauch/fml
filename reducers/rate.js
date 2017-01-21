import {
	UPDATE_COMPARISON_PROCESS,
	SAVE_COMPARISON_RESULT } from '../actions/'
export default (state =
{
	process: {},
	results: [{
		movieFromCollection: '1931101123', // Pulp Fiction
		movieFromPersonalList: undefined,
		won: true
	}]
}, action) => {
	switch(action.type) {
		case UPDATE_COMPARISON_PROCESS:
			return Object.assign({}, state, {
				process: action.payload
			});
		case SAVE_COMPARISON_RESULT:
			return Object.assign({}, state, {
				results: state.results.concat(action.payload)
			});
		default:
			return state;
	}
};

