import {hashCode} from '../src/movieCollections/reducers';

export const START_EMPTY_PROCESS = 'START_EMPTY_PROCESS';
export const startEmptyProcess = (id) => {
	return {
		type: START_EMPTY_PROCESS,
		id: id
	};
};

export const START_COMPARISON_PROCESS = 'START_COMPARISON_PROCESS';
export const startComparisonProcess = (payload) => {
	return {
		type: START_COMPARISON_PROCESS,
		id: hashCode(payload.movieCollection.name),
		payload: payload
	};
};
export const UPDATE_COMPARISON_PROCESS = 'UPDATE_COMPARISON_PROCESS';
export const updateComparisonProcess = (id, result) => {
	return {
		type: UPDATE_COMPARISON_PROCESS,
		id: id,
		payload: result
	};
};
export const FINISH_COMPARISON_PROCESS = 'FINISH_COMPARISON_PROCESS';
export const finishComparisonProcess = (id, result) => {
	return {
		type: FINISH_COMPARISON_PROCESS,
		id: id,
		payload: result
	};
};
