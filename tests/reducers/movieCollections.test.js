import reducerTest from '../helper/reducerTest'
import reducer from '../../src/movieCollections/reducers'
import * as Actions from '../../src/movieCollections/actions'

const it = reducerTest.bind(null, reducer);

describe('movieCollections reducer', () => {

	it('should create collection and add movies line-by-line', {
		stateBefore:
		{"2603186": {
			isLoading: false,
			name: 'Test',
			sort: 'title',
			movies: {
				"662285847": {
					title: 'Mission Impossible'
				}
			}
		}},
		action: Actions.addMovieCollectionWithMoviesLineByLine({
			name: 'Awesome Vol1',
			movies: 'Matrix\nStar Wars\nHerr der Ringe'
		}),
		stateAfter:
		{"2603186": {
			isLoading: false,
			name: 'Test',
			sort: 'title',
			movies: {
				"662285847": {
					title: 'Mission Impossible'
				}
			}
		},
		"1695575963": {
			isLoading: false,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {
				"1997372447": {
					title: "Matrix"
				},
				"202820711": {
					title: "Star Wars"
				},
				"1801708797": {
					title: "Herr der Ringe"
				}
			}
		}}
	});

	it('should create loading movie collection and empty movies', {
		stateBefore: {},
		action: Actions.addMovieCollectionByFileStart({
			name: 'Awesome Vol1'
		}),
		stateAfter:
		{"1695575963": {
			isLoading: true,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {}
		}}
	});

	it('should update movie collection and add movies', {
		stateBefore:
		{"1695575963": {
			isLoading: true,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {}
		}},
		action: Actions.updateMovieCollectionByFile({
			name: 'Awesome Vol1',
			movies: [{
				title: "Matrix"
			},{
				title: 'Herr der Ringe',
			}]
		}),
		stateAfter:
		{"1695575963": {
			isLoading: true,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {
				"1997372447": {
					title: "Matrix"
				},
				"1801708797": {
					title: "Herr der Ringe"
				}
			}
		}}
	});

	it('should update movie collection to status finished', {
		stateBefore:
		{"1695575963": {
			isLoading: true,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {}
		}},
		action: Actions.addMovieCollectionByFileFinished({
			name: 'Awesome Vol1',
		}),
		stateAfter:
		{"1695575963": {
			isLoading: false,
			name: 'Awesome Vol1',
			sort: 'title',
			movies: {}
		}}
	});
})

