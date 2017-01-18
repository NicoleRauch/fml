export default (results) => {
	if(typeof results === "undefined" || results.length === 0) {
		return [];
	}
	const firstMovie = results.find((result) => {
		if(typeof result.movieFromPersonalList === "undefined") {
			return result;
		}
	});
	return [firstMovie.movieFromCollection];
};
