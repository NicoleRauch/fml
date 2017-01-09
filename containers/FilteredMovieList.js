import { connect } from 'react-redux'
import MovieList from '../components/MovieList'

const mapStateToProps = (state) => ({
	movies: getSortedMovies(state.rate)
});
const mapDispatchToProps = ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList)

const getSortedMovies = (collection) => {
	const movies = Object.keys(collection.movies).map((movieId) => {
		let movie = collection.movies[movieId];
		movie.id = movieId;
		return movie;
	});
	return sortMovies(movies, collection.sort);
};

const sortMovies = (movies, sortAttribute) => {
	return movies.sort((a, b) => {
		const first = removeMovieSpecificPrefixes(a[sortAttribute]).toLowerCase();
		const second = removeMovieSpecificPrefixes(b[sortAttribute]).toLowerCase();
		return (first<second?-1:(first>second?1:0))
	});
};

const removeMovieSpecificPrefixes = (string) => {
	let noPrefix = string.replace(/^(Der|Die|Das|The)/, '');
	return noPrefix.trim();
};

