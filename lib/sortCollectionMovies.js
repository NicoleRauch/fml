export default (collection) => {
	if(!collection || !collection.movies) {
		return [];
	}

	const movies = Object.keys(collection.movies).map((movieId) => {
		let movie = collection.movies[movieId];
		movie.id = movieId;
		return movie;
	});
	return sortMovies(movies, collection.sort);
}

const sortMovies = (movies, sortAttribute) => {
	return movies.sort((a, b) => {
		const first = movieTitleSpecialTreatment(a.title).toLowerCase();
		const second = movieTitleSpecialTreatment(b.title).toLowerCase();
		return (first<second?-1:(first>second?1:0))
	});
};

const movieTitleSpecialTreatment = (movieTitle) => {
	let noPrefix = movieTitle.replace(/^(Der|Die|Das|The)/, '');
	let noAUmlaut = noPrefix.replace(/Ä/, 'A');
	let noUUmlaut = noAUmlaut.replace(/Ü/, 'U');
	let noOUmlaut = noUUmlaut.replace(/Ö/, 'O');
	let noBrackets = noOUmlaut.replace(/\(|\)/, '');
	return noBrackets.trim();
};

