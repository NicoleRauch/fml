import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/movieCollections'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

describe('movieCollections reducer', () => {

	it('should create collection and add movies line-by-line', {
		stateBefore:
		{"2603186": { 
			isLoading: false,
			name: 'Test',
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
			movies: {
				"662285847": {
					title: 'Mission Impossible'
				}
			}
		},
		"1695575963": {
			isLoading: false,
			name: 'Awesome Vol1',
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
			movies: {}
		}}
	});

	it('should update movie collection and add movies', {
		stateBefore:
		{"1695575963": {
			isLoading: true,
			name: 'Awesome Vol1',
			movies: {}
		}},
		action: Actions.updateMovieCollectionByFileFinished({
			name: 'Awesome Vol1',
			movies: [{
				title: "Matrix"
			},{
				title: 'Herr der Ringe',
			}]
		}),
		stateAfter:
		{"1695575963": {
			isLoading: false,
			name: 'Awesome Vol1',
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
})

