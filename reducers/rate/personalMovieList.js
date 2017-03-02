import { FINISH_COMPARISON_PROCESS } from '../../actions/'

export default (state = [], action) => {
	switch(action.type) {
		case FINISH_COMPARISON_PROCESS:
			const result = state.concat();
			result.splice(action.payload.result, 0, action.payload.movieFromCollection);
			return result;
		default:
			return state;
	}
};

