# ToDo

 * Change ComparisonProcess so that click on "rate" starts the comparison
	process, and then the movies to actually start the comparisons are
	filled in by addChosenMovieToComparisonProcess

 * Implement NODE_ENV indirection, so that:
	production: local storage used for persistence (for now)
	!production: no local storage, console output and dev tools
