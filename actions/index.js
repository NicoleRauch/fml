export const ADD_MOVIE = 'ADD_MOVIE';

export const ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE = 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE';
export const ADD_MOVIECOLLECTION_BY_FILE_START = 'ADD_MOVIECOLLECTION_BY_FILE_START';
export const ADD_MOVIECOLLECTION_BY_FILE_FINISHED = 'ADD_MOVIECOLLECTION_BY_FILE_FINISHED';
export const ADD_MOVIECOLLECTION_BY_FILE_ERROR = 'ADD_MOVIECOLLECTION_BY_FILE_ERROR';

export const addMovieCollectionWithMoviesLineByLine = (movieCollection) => {
	movieCollection.id = movieCollection.id ? movieCollection.id : hashCode(movieCollection.name);
	return {
		type: ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
		movieCollection
	}
};

export const addMovieCollectionByFileStart = (movieCollection) => {
	movieCollection.id = movieCollection.id ? movieCollection.id : hashCode(movieCollection.name);
	return {
		type: ADD_MOVIECOLLECTION_BY_FILE_START,
		movieCollection
	}
};

export const addMovie = (movie) => {
	movie.id = movie.id ? movie.id : hashCode(movie.title);
	return {
		type: ADD_MOVIE,
		movie
	}
};

const hashCode = (titleString) => {
	let hash = 0, length = titleString.length;
	if (length == 0) return hash;
	for (let i = 0; i < length; i++) {
		let character = titleString.charCodeAt(i);
		hash = ((hash<<5)-hash)+character;
		hash = hash & hash; // Convert to 32bit integer
	}
	return Math.abs(hash);
};

