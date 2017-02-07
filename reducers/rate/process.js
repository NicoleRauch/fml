import {
	START_COMPARISON_PROCESS,
	UPDATE_COMPARISON_PROCESS,
	FINISH_COMPARISON_PROCESS } from '../../actions/'

export default (state = {}, action) => {
	switch(action.type) {
		case START_COMPARISON_PROCESS:
		case UPDATE_COMPARISON_PROCESS:
		case FINISH_COMPARISON_PROCESS:
			return Object.assign({}, state, {
				[action.id]: process(state[action.id], action)
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
			const R = action.payload.personalMovieListLength;
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
	let l = L,
		r = R;

	if(comparisonResult) {
		r = m-1;
	} else {
		l = m+1;
	}

	if(l >=r) {
		return {
			finished: true,
			result: l
		};
	} else {
		return {
			finished: false,
			L: l,
			R: r,
			m: Math.floor((l+r)/2)
		};
	}
};

