import reducer from '../reducers/'

describe('movies reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({
			"movies": [],
			"movieCollections": []
		})
	})
})

