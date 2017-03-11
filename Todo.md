# ToDo

 * Change ComparisonProcess so that click on "rate" starts the comparison
	process, and then the movies to actually start the comparisons are
	filled in by addChosenMovieToComparisonProcess
	c) START_EMPTY_PROCESS {finished: true}
	c) personalMovieList=[] => ADD_CHOOSEN_MOVIE_TO_PROCESS {secondMovieFromCollection: id}
	3) ADD_CHOOSEN_MOVIE_TO_PROCESS {movieFromCollection: id}
	4) UPDATE_COMPARISON_PROCESS
	5) FINISH_COMPARISON_PROCESS (handle secondMovieFromCollection, if present)

 * Implement NODE_ENV indirection, so that:
	production: local storage used for persistence (for now)
	!production: no local storage, console output and dev tools

