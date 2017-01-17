import {
	SAVE_COMPARISON_RESULT } from '../actions/'
export default (state =
{
	processes: {},
	results: [{
		movieFromCollection: '1931101123', // Pulp Fiction
		movieFromPersonalList: undefined,
		won: true
	}]
}, action) => {
	switch(action.type) {
		case SAVE_COMPARISON_RESULT:
			return Object.assign({}, state, {
				results: state.results.concat(action.payload)
			})
		default:
			return state;
	}
};

