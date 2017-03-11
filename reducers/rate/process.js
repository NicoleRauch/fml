import {
	START_EMPTY_PROCESS,
	ADD_CHOSEN_MOVIE_TO_COMPARISON_PROCESS,
	START_COMPARISON_PROCESS,
	UPDATE_COMPARISON_PROCESS,
	FINISH_COMPARISON_PROCESS } from '../../actions/'

export default (state = {}, action) => {
	switch(action.type) {
		case START_EMPTY_PROCESS:
		case ADD_CHOSEN_MOVIE_TO_COMPARISON_PROCESS:
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
		case ADD_CHOSEN_MOVIE_TO_COMPARISON_PROCESS:
			const nextState = Object.assign({}, state);
			nextState[action.payload.target] = action.payload.chosenMovie;
			return nextState;
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
		r = m;
	} else {
		l = m+1;
	}

	const nextM = Math.floor((l+r)/2);

	if(l === r) {
		return {
			finished: true,
			result: l
		};
	}
	return {
		finished: false,
		L: l,
		R: r,
		m: nextM
	};
};

