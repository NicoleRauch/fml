import {
	START_COMPARISON_PROCESS,
	UPDATE_COMPARISON_PROCESS } from '../actions/'
import toMovieArray from '../lib/rateResultsToMovieArray'

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
		case START_COMPARISON_PROCESS:
		case UPDATE_COMPARISON_PROCESS:
			return Object.assign({}, state, {
				process: {
					[action.id]: process(
						state.process[action.id],
						Object.assign({}, action, {results: state.results})
					)
				}
			})
		default:
			return state;
	}
};

const process = (state =
{
	finished: false
}, action) => {
	switch(action.type) {
		case START_COMPARISON_PROCESS:
			const movieArray = toMovieArray(action.results);
			const R = (movieArray.length)-1;
			return Object.assign({}, state, {
				L: 0,
				R: R,
				m: Math.floor((R)/2)
			});
		case UPDATE_COMPARISON_PROCESS:
			return iterateBinarySearch(
						state.L, state.R, state.m,
						action.payload.comparisonWonByMovieFromCollection
					);
		default:
			return state;
	}
};

const iterateBinarySearch = (L, R, m, comparisonResult) => {
	if(L===0 && R===0) {
		const result = comparisonResult ? L : 1;
		return {
			finished: true,
			result: result
		}
	}
};

