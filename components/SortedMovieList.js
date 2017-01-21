import React from 'react'
import MovieList from './MovieList'
import getSortedMovies from '../lib/sortCollectionMovies'

export default class SortedMovieList extends React.Component {

	render() {
		const movies = getSortedMovies(this.props.collection);
		return (
			<MovieList movies={movies} />
		);
	}
};

