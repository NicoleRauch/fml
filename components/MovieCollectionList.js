import React from 'react'
import MovieCollection from './MovieCollectionItem'

export default class MovieCollectionList extends React.Component {
	render() {
		const collections = this.props.movieCollections || [];
		const movieCollections = enhance(collections);
		return (
			<ol>
				{Object.keys(movieCollections).map(movieCollectionId =>
					<MovieCollection
						key={movieCollectionId}
						id={movieCollectionId}
						{...movieCollections[movieCollectionId]}
					/>
				)}
			</ol>
		)
	}
};

const enhance = (movieCollections) => {
	Object.keys(movieCollections).forEach(
		(movieCollectionId) => addMoviesQuantity(movieCollections[movieCollectionId])
	);
	return movieCollections;
};

const addMoviesQuantity = (movieCollection) => {
	movieCollection.moviesQuantity = Object.keys(movieCollection.movies).length;
	return movieCollection;
};

