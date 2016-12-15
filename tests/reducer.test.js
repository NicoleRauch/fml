import reducer from '../reducers/'

describe('movies reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({"movies": []})
	})

	it('should add movies line-by-line', () => {
		const stateBefore = {movies: [{
			id: -662285847,
			title: 'Mission Impossible'
		}]};
		const action = {
			type: 'ADD_MOVIES_LINE-BY-LINE',
			value: {
				movies: 'Matrix\nStar Wars\nHerr der Ringe'
			}
		};

		expect(
			reducer(stateBefore, action)
		).toEqual({
			movies:[{
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
})

