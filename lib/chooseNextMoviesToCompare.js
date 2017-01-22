export default (personalMovieListIds, sortedMovies, process) => {
	if(typeof process === "undefined") {
		return {};
	}
	if(typeof process.movieIdFromCollection === "undefined" ||
	   typeof process.movieIdFromPersonalList === "undefined") {
		// There is no process yet
		return {
			movieIdFromCollection: sortedMovies[Math.floor(sortedMovies.length/2)].id,
			movieIdFromPersonalList: personalMovieListIds[0]
		};
	}

	return {
		movieIdFromCollection: '1997372447',
		movieIdFromPersonalList: '1931101123'
	};
};

