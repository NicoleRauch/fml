export const ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE = 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE';
export const ADD_MOVIECOLLECTION_BY_FILE_START = 'ADD_MOVIECOLLECTION_BY_FILE_START';
export const ADD_MOVIECOLLECTION_BY_FILE_FINISHED = 'ADD_MOVIECOLLECTION_BY_FILE_FINISHED';
export const ADD_MOVIECOLLECTION_BY_FILE_ERROR = 'ADD_MOVIECOLLECTION_BY_FILE_ERROR';

export const addMovieCollectionWithMoviesLineByLine = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
		movieCollection
	}
};

export const addMovieCollectionByFileStart = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_BY_FILE_START,
		movieCollection
	}
};

