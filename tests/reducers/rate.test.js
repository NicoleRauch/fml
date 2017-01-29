import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('should start the comparison process', {
		stateBefore: {
			process: {},
			personalMovieList: ['1931101123']
		},
		action: Actions.startComparisonProcess({movieCollection: {
				name:'Hugo Blurays',
				isLoading: false,
				sort: "title",
				movies: {
					'1931101123':{title:'Pulp Fiction'},
					'6902420':{title:'The Walk - Eine triumphale wahre Geschichte (2015)'},
					'12675280':{title:'96 Hours - Taken 2 (2012)'}
				}
			},
			movieFromCollection: '6902420'
		}),
		stateAfter: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0,
					finished: false,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		}
	});

	it('iterate over two movies second won', {
		stateBefore: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0,
					finished: false,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: true}
		),
		stateAfter: {
			process: {
				'673655561': {
					finished: true,
					result: 0,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		}
	});
	it('iterate over two movies second lost', {
		stateBefore: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0,
					finished: false,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: false}
		),
		stateAfter: {
			process: {
				'673655561': {
					finished: true,
					result: 1,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		}
	});

	it('should finish comparison process two movies second won', {
		stateBefore: {
			process: {
				'673655561': {
					finished: true,
					result: 0,
					movieFromCollection: '6902420'
				}
			},
			personalMovieList: ['1931101123']
		},
		action: Actions.finishComparisonProcess('673655561', {
					finished: true,
					result: 0,
					movieFromCollection: '6902420'
				}),
		stateAfter: {
			process: {
				'673655561': undefined
			},
			personalMovieList: ['6902420', '1931101123']
		}
	});
});

