import React from 'react'
import MovieList from './MovieList'

export default class PersonalMovieList extends React.Component {

	render() {
		const movies = getMovieArray(this.props);
		return (
			<MovieList movies={movies} />
		);
	}
};

const getMovieArray = ({ rate: { personalMovieList }, movieCollections }) => {
	return enrich(personalMovieList, movieCollections);
};

const enrich = (movieIds, movieCollections) => {
	return movieIds.map((movieId) => {
		const matchingMovies = Object.keys(movieCollections).map((collectionId) => {
			return movieCollections[collectionId].movies[movieId];
		});
		const movie = matchingMovies[0];
		movie.id = movieId;
		return movie;
	});
};
