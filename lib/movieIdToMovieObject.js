export default (movieId, movieCollections) => {
	return Object.values(movieCollections).reduce((acc, currentValue) => {
		Object.assign(acc, currentValue.movies[movieId]);
		return acc;
	}, {id: movieId});
};

