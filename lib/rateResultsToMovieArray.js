export default (results) => {
	if(typeof results === "undefined" || results.length === 0) {
		return [];
	}

	const amountOfResults = results.length;
	const movieIds = results.reduce((movies, result, currentIndex, array) => {
		if(typeof result.movieFromPersonalList === "undefined") {
			movies.push(result.movieFromCollection);
		} else if(currentIndex === (amountOfResults-1)) {
			// This is the last item in the array
			inputMovieIntoArray(movies, result);
		} else if(result.movieFromCollection !== array[currentIndex+1].movieFromCollection) {
			// This is the last comparison for this movie
			inputMovieIntoArray(movies, result);
		}
		return movies;
	}, []);

	return movieIds;
};

const inputMovieIntoArray = (movies, result) => {
	let indexMovieFromPersonalList = movies.findIndex(
		(movieId) => movieId === result.movieFromPersonalList
	);
	let offsetForNewMovie = result.won ? 0 : +1;
	let newIndex = indexMovieFromPersonalList + offsetForNewMovie;
	movies.splice(newIndex, 0, result.movieFromCollection);
};

