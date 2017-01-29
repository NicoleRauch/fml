import SuT from "../../lib/getUnratedMovieFromCollection";

describe("GetUnratedMovieFromCollection", () => {

	it('should return first unrated movie from collection', () => {
		const movieCollection = {
			name:'Hugo Blurays',
			isLoading: false,
			sort: "title",
			movies: {
				'6902420':{title:'The Walk - Eine triumphale wahre Geschichte (2015)'},
				'12675280':{title:'96 Hours - Taken 2 (2012)'},
				'12983667':{title:'Men in Black (1997)'},
				'35474895':{title:'Moneyball - Die Kunst zu gewinnen'}
			}
		};
		const personalMovieListIds = ['6902420', '12983667'];
		const expected = '12675280';

		expect(SuT(personalMovieListIds, movieCollection))
			.toEqual(expected);
	});

});

