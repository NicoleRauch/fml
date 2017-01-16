import {
	SAVE_COMPARISON_RESULT } from '../actions/'
export default (state =
{
	processes: {},
	results: [{
		movieToCompare: '1931101123',
		movieFromRatedList: undefined,
		won: true
	}],
	sort: "title"
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

