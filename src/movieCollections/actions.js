import {hashCode} from '../../reducers/movieCollections';

export const ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE = 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE';
export const ADD_MOVIECOLLECTION_BY_FILE_START = 'ADD_MOVIECOLLECTION_BY_FILE_START';
export const UPDATE_MOVIECOLLECTION_BY_FILE = 'UPDATE_MOVIECOLLECTION_BY_FILE';
export const ADD_MOVIECOLLECTION_BY_FILE_FINISHED = 'ADD_MOVIECOLLECTION_BY_FILE_FINISHED';


export const addMovieCollectionWithMoviesLineByLine = movieCollection => {
  return {
    type: ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
    id: hashCode(movieCollection.name),
    movieCollection
  }
};

export const createMovieCollectionByFile = (movieCollection) => {
  return (dispatch) => {
    dispatch(addMovieCollectionByFileStart(movieCollection));
    // start WebWorker and Dispatch updateMovieCollectionByFileFinished if returns with result
    const worker = new Worker("/static/minifiedWorker/parseVideoDbXml.js");
    worker.postMessage(movieCollection.file);
    worker.onmessage = (e) => {
      if(e.data.event && e.data.event === "finished") {
        dispatch(addMovieCollectionByFileFinished({
          name: movieCollection.name,
        }));
        return;
      }
      dispatch(updateMovieCollectionByFile({
        name: movieCollection.name,
        movies: [e.data]
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
    id: hashCode(movieCollection.name)
  }
};

export const ADD_MOVIE_TO_PERSONAL_MOVIE_LIST = 'ADD_MOVIE_TO_PERSONAL_MOVIE_LIST';
export const addMovieToPersonalMovieList = (movieId) => {
  return {
    type: ADD_MOVIE_TO_PERSONAL_MOVIE_LIST,
    payload: {
      movieId
    }
  };
};
