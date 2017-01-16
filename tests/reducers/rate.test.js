import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/rate'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('rate reducer', () => {
	it('should store comparison result', {
		stateBefore: {
			results: [{
				movieToCompare: '1931101123',
				movieFromRatedList: undefined,
				won: true
			}]
		},
		action: Actions.saveComparisonResult({
			movieToCompare: '1931101123',
			movieFromRatedList: '958203335',
			won: false
		}),
		stateAfter: {
			results: [{
				movieToCompare: '1931101123',
				movieFromRatedList: undefined,
				won: true
			},{
				movieToCompare: '1931101123',
				movieFromRatedList: '958203335',
				won: false
			}]
		}
	});
});

