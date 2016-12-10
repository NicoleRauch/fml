import reducer from '../reducers/'

describe('movies reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({"movies": [
			{id: 1, title: "Matrix"},
			{id: 2, title: "Herr der Ringe"},
			{id: 3, title: "Star Wars"}
		]})
	})
})

