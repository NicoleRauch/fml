import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('should start the comparison process', {
		stateBefore: {
			process: {},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		},
		action: Actions.startComparisonProcess({
			name:'Hugo Blurays',
			isLoading: false,
			sort: "title",
			movies: {
				'1931101123':{title:'Pulp Fiction'},
				'6902420':{title:'The Walk - Eine triumphale wahre Geschichte (2015)'},
				'12675280':{title:'96 Hours - Taken 2 (2012)'}
			}
		}),
		stateAfter: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0,
					finished: false
				}
			},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		}
	});
	it('iterate over two movies second won', {
		stateBefore: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0
				}
			},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: true}
		),
		stateAfter: {
			process: {
				'673655561': {
					finished: true,
					result: 0
				}
			},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		}
	});
	it('iterate over two movies second won', {
		stateBefore: {
			process: {
				'673655561': {
					L: 0, R: 0, m: 0
				}
			},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: false}
		),
		stateAfter: {
			process: {
				'673655561': {
					finished: true,
					result: 1
				}
			},
			results: [{
				movieFromCollection: '1931101123',
				movieFromPersonalList: undefined,
				comparisonWonByMovieFromCollection: true
			}]
		}
	});
});

