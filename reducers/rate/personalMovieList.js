import { FINISH_COMPARISON_PROCESS } from '../../actions/';
import { ADD_MOVIE_TO_PERSONAL_MOVIE_LIST } from '../../src/movieCollections/actions';

export default (state = [], action) => {
	switch(action.type) {
		case ADD_MOVIE_TO_PERSONAL_MOVIE_LIST:
			return state.concat(action.payload.movieId);
		case FINISH_COMPARISON_PROCESS:
			const result = state.concat();
			result.splice(action.payload.result, 0, action.payload.movieFromCollection);
			return result;
		default:
			return state;
	}
};

