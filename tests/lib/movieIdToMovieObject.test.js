import SuT from "../../lib/movieIdToMovieObject";

describe("MovieIdToMovieObject", () => {

	it('should return object with at least id and title', () => {
		const movieId = '12983667';
		const movieCollections = {
			'673655561': {
				name:'Hugo Blurays',
				isLoading: false,
				sort: "title",
				movies: {
					'6902420':{title:'The Walk - Eine triumphale wahre Geschichte (2015)'},
					'12675280':{title:'96 Hours - Taken 2 (2012)'},
					'12983667':{title:'Men in Black (1997)'},
					'35474895':{title:'Moneyball - Die Kunst zu gewinnen'}
				}
			}
		};
		const expected = {
			id: '12983667',
			title: 'Men in Black (1997)'
		};
		expect(SuT(movieId, movieCollections)).toEqual(expected);
	});

});

