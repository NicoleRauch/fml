import {
	START_COMPARISON_PROCESS,
	UPDATE_COMPARISON_PROCESS,
	FINISH_COMPARISON_PROCESS } from '../actions/'

export default (state =
{
	process: {},
	personalMovieList: ['1931101123']
}, action) => {
	switch(action.type) {
		case START_COMPARISON_PROCESS:
		case UPDATE_COMPARISON_PROCESS:
			return Object.assign({}, state, {
				process: {
					[action.id]: process(
						state.process[action.id],
						Object.assign({}, action,
							{personalMovieList: state.personalMovieList}
						)
					)
				}
			})
		case FINISH_COMPARISON_PROCESS:
			return Object.assign({}, state, {
				process: {
					[action.id]: process(
						state.process[action.id],
						action
					)
				},
				personalMovieList: personalMovieList(state.personalMovieList, action)
			})
		default:
			return state;
	}
};

const personalMovieList = (state = [], action) => {
	switch(action.type) {
		case FINISH_COMPARISON_PROCESS:
			const result = state.concat();
			result.splice(action.payload.result, 0, action.payload.movieFromCollection);
			return result;
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
			const R = (action.personalMovieList.length)-1;
			return Object.assign({}, state, {
				L: 0,
				R: R,
				m: Math.floor((R)/2),
				movieFromCollection: action.payload.movieFromCollection
			});
		case UPDATE_COMPARISON_PROCESS:
			return Object.assign({}, iterateBinarySearch(
					state.L, state.R, state.m,
					action.payload.comparisonWonByMovieFromCollection
				), {
					movieFromCollection: state.movieFromCollection
				}
			);
		case FINISH_COMPARISON_PROCESS:
			return;
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

