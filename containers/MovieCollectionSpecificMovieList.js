import { connect } from 'react-redux'
import MovieList from '../components/MovieList'

const getMovieCollectionMoviesById = (state, collectionId) => {
	const movieCollection = state.movieCollections.find((movieCollection) => {
		return movieCollection.id == collectionId;
	});
	return movieCollection ? movieCollection.movies : [];
};

const mapStateToProps = (state, ownProps) => ({
	movies: getMovieCollectionMoviesById(state, ownProps.collectionId)
});

export default connect(
	mapStateToProps
)(MovieList)

