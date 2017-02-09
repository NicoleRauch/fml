import reducerTest from './reducerTest'
import reducer from '../../reducers/rate/process.js'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

export default (params) => {
	const { elements, comparisons, result } = params;
	const resultVisualization = new Array(elements);
	resultVisualization.splice(result, 0, 'x');
	it(elements+" movies ["+comparisons+"] ["+resultVisualization+"]", {
		stateBefore: {
			'673655561': {
				L: 0, R: elements, m: Math.floor(elements/2),
				finished: false,
				movieFromCollection: '6902420'
			}
		},
		actions: comparisons.map((comparison) => {
			return Actions.updateComparisonProcess('673655561',
						{comparisonWonByMovieFromCollection: comparison});
		}),
		stateAfter: {
			'673655561': {
				finished: true,
				result: result,
				movieFromCollection: '6902420'
			}
		}
	});
};

