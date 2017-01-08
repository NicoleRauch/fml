import { connect } from 'react-redux'
import MovieCollectionList from '../components/MovieCollectionList'

const mapStateToProps = (state) => ({
	movieCollections: enhanced(state.movieCollections)
});

export default connect(
	mapStateToProps
)(MovieCollectionList)

const enhanced = (movieCollections) => {
	Object.keys(movieCollections).forEach(
		(movieCollectionId) => addMoviesQuantity(movieCollections[movieCollectionId])
	);
	return movieCollections;
};

const addMoviesQuantity = (movieCollection) => {
	movieCollection.moviesQuantity = Object.keys(movieCollection.movies).length;
	return movieCollection;
};
