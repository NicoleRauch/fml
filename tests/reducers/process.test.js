import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate/process'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('iterate over two movies second won [x,1]', {
		stateBefore: {
			'673655561': {
				L: 0, R: 1, m: 0,
				finished: false,
				movieFromCollection: '6902420'
			}
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: true}
		),
		stateAfter: {
			'673655561': {
				finished: true,
				result: 0,
				movieFromCollection: '6902420'
			}
		}
	});
	it('iterate over two movies second lost [1,x]', {
		stateBefore: {
			'673655561': {
				L: 0, R: 1, m: 0,
				finished: false,
				movieFromCollection: '6902420'
			}
		},
		action: Actions.updateComparisonProcess('673655561',
			{comparisonWonByMovieFromCollection: false}
		),
		stateAfter: {
			'673655561': {
				finished: true,
				result: 1,
				movieFromCollection: '6902420'
			}
		}
	});
	it('iterate over three movies third lost,lost [1,2,x]', {
		stateBefore: {
			'673655561': {
				L: 0, R: 2, m: 0,
				finished: false,
				movieFromCollection: '6902420'
			}
		},
		actions: [
			Actions.updateComparisonProcess('673655561',
				{comparisonWonByMovieFromCollection: false}),
			Actions.updateComparisonProcess('673655561',
				{comparisonWonByMovieFromCollection: false}),
		],
		stateAfter: {
			'673655561': {
				finished: true,
				result: 2,
				movieFromCollection: '6902420'
			}
		}
	});
});

