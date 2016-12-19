import reducer from '../../reducers/movieCollections'

describe('movieCollections reducer', () => {

	it('should create list and add movies line-by-line', () => {
		const stateBefore = [{
			id: 2603186,
			name: 'Test',
			movies: [{
				id: -662285847,
				title: 'Mission Impossible'
			}]
		}];
		const action = {
			type: 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE-BY-LINE',
			movieCollection: {
				name: 'Awesome Vol1',
				movies: 'Matrix\nStar Wars\nHerr der Ringe'
			}
		};

		expect(
			reducer(stateBefore, action)
		).toEqual(
			[{
				id: 2603186,
				name: 'Test',
				movies: [{
					id: -662285847,
					title: 'Mission Impossible'
				}]
			}, {
				id: 1695575963,
				name: 'Awesome Vol1',
				movies: [{
					id: -1997372447,
					title: "Matrix"
				}, {
					id: -202820711,
					title: "Star Wars"
				}, {
					id: -1801708797,
					title: "Herr der Ringe"
				}]
			}]
		);
	})
})

