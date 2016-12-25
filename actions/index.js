export const ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE = 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE';

export const addMovieCollectionWithMoviesLineByLine = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
		movieCollection
	}
};
