export default (personalMovieListIds, movieCollection) => {
	return Object.keys(movieCollection.movies).find((element) => {
		return !personalMovieListIds.includes(element);
	});
};

