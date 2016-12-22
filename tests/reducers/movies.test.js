import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/movies'
const it = reducerTest.bind(null, reducer);

describe('movies reducer', () => {

	it('should add movies line-by-line', {
		stateBefore:
		[{
			id: -662285847,
			title: 'Mission Impossible'
		}],
		action:
		{
			type: 'ADD_MOVIES_LINE-BY-LINE',
			value: {
				movies: 'Matrix\nStar Wars\nHerr der Ringe'
			}
		},
		stateAfter:
		[{
			id: -662285847,
			title: 'Mission Impossible'
			}, {
				id: -1997372447,
				title: "Matrix"
			}, {
				id: -202820711,
				title: "Star Wars"
			}, {
				id: -1801708797,
				title: "Herr der Ringe"
		}]
	});
})

