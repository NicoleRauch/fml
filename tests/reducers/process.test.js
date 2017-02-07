import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate/process'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('iterate over two movies second won', {
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
	it('iterate over two movies second lost', {
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
});

