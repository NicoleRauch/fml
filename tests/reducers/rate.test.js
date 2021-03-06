import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('should start an empty comparison process', {
		stateBefore: {
			process: {},
			personalMovieList: []
		},
		action: Actions.startEmptyProcess('673655561'),
		stateAfter: {
			process: {
				'673655561': {
					finished: false
				}
			},
			personalMovieList: []
		}
	});

	it('should start the comparison process', {
		stateBefore: {
			process: {},
			personalMovieList: ['1931101123']
		},
		action: Actions.startComparisonProcess({movieCollection: {
				name:'Hugo Blurays'
			},
			chosenMovie: '6902420',
			personalMovieListLength: 1
		}),
		stateAfter: {
			process: {
				'673655561': {
					L: 0, R: 1, m: 0,
					finished: false,
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

