export const ADD_MOVIE = 'ADD_MOVIE';

export const ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE = 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE';
export const ADD_MOVIECOLLECTION_BY_FILE_START = 'ADD_MOVIECOLLECTION_BY_FILE_START';
export const UPDATE_MOVIECOLLECTION_BY_FILE = 'UPDATE_MOVIECOLLECTION_BY_FILE';
export const ADD_MOVIECOLLECTION_BY_FILE_FINISHED = 'ADD_MOVIECOLLECTION_BY_FILE_FINISHED';
export const ADD_MOVIECOLLECTION_BY_FILE_ERROR = 'ADD_MOVIECOLLECTION_BY_FILE_ERROR';

export const addMovieCollectionWithMoviesLineByLine = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
		id: hashCode(movieCollection.name),
		movieCollection
	}
};

export const createMovieCollectionByFile = (movieCollection) => {
	console.log(movieCollection);
	return (dispatch) => {
		dispatch(addMovieCollectionByFileStart(movieCollection));
		// start WebWorker and Dispatch updateMovieCollectionByFileFinished if returns with result
		const worker = new Worker("/static/minifiedWorker/parseVideoDbXml.js");
		worker.postMessage(movieCollection.file);
		worker.onmessage = (e) => {
			dispatch(updateMovieCollectionByFile({
				name: movieCollection.name,
				movies: [e.data]
			}));
			dispatch(addMovieCollectionByFileFinished({
				name: movieCollection.name,
			}));
		};
	};
};

export const addMovieCollectionByFileStart = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_BY_FILE_START,
		id: hashCode(movieCollection.name),
		movieCollection
	}
};

export const updateMovieCollectionByFile = (movieCollection) => {
	return {
		type: UPDATE_MOVIECOLLECTION_BY_FILE,
		id: hashCode(movieCollection.name),
		movieCollection
	}
};

export const addMovieCollectionByFileFinished = (movieCollection) => {
	return {
		type: ADD_MOVIECOLLECTION_BY_FILE_FINISHED,
		id: hashCode(movieCollection.name),
		movieCollection
	}
};

export const addMovie = (movie) => {
	return {
		type: ADD_MOVIE,
		id: hashCode(movie.title),
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

