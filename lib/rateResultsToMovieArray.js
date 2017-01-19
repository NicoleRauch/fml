export default (results) => {
	if(typeof results === "undefined" || results.length === 0) {
		return [];
	}

	const amountOfResults = results.length;
	const aggregation = results.reduce((aggregate, result, currentIndex) => {
		if(typeof result.movieFromPersonalList === "undefined") {
			aggregate.movies.push(result.movieFromCollection);
			return aggregate;
		}
		if(currentIndex === (amountOfResults-1)) {
			let indexMovieFromPersonalList = aggregate.movies.findIndex(
				(movieId) => movieId === result.movieFromPersonalList
			);
			let offsetForNewMovie = result.won ? -1 : +1;
			let newIndex = indexMovieFromPersonalList + offsetForNewMovie;
			newIndex = newIndex < 0 ? 0 : newIndex;
			aggregate.movies.splice(newIndex, 0, result.movieFromCollection);
		}
		return aggregate;
	}, {movies: []});

	return aggregation.movies;
};

