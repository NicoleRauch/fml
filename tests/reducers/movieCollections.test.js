import reducerTest from '../helper/reducerTest'
import reducer from '../../reducers/movieCollections'
const it = reducerTest.bind(null, reducer);
import * as Actions from "../../actions/"

import {
	ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
	ADD_MOVIECOLLECTION_BY_FILE_START,
	ADD_MOVIECOLLECTION_BY_FILE_FINISHED } from '../../actions/'

describe('movieCollections reducer', () => {

	it('should create collection and add movies line-by-line', {
		stateBefore:
		[{ 
			id: 2603186,
			isLoading: false,
			name: 'Test',
			movies: [{
				id: -662285847,
				title: 'Mission Impossible'
			}]
		}],
		action: Actions.addMovieCollectionWithMoviesLineByLine({
			name: 'Awesome Vol1',
			movies: 'Matrix\nStar Wars\nHerr der Ringe'
		}),
		stateAfter:
		[{
			id: 2603186,
			isLoading: false,
			name: 'Test',
			movies: [{
				id: -662285847,
				title: 'Mission Impossible'
			}]
		}, {
			id: 1695575963,
			isLoading: false,
			name: 'Awesome Vol1',
			movies: [{
				id: 1997372447,
				title: "Matrix"
			}, {
				id: 202820711,
				title: "Star Wars"
			}, {
				id: 1801708797,
				title: "Herr der Ringe"
			}]
		}]
	});

	it('should create loading movie collection and empty movies', {
		stateBefore: [],
		action: Actions.addMovieCollectionByFileStart({
			name: 'Awesome Vol1'
		}),
		stateAfter:
		[{
			id: 1695575963,
			isLoading: true,
			name: 'Awesome Vol1',
			movies: []
		}]
	});

	it('should update movie collection and add movies', {
		stateBefore:
		[{
			id: 1695575963,
			isLoading: true,
			name: 'Awesome Vol1',
			movies: []
		}],
		action:
		{
			type: ADD_MOVIECOLLECTION_BY_FILE_FINISHED,
			movieCollection: {
				name: 'Awesome Vol1',
				movies: [{
					name: 'Matrix',
				},{
					name: 'Herr der Ringe',
				}]
			}
		},
		stateAfter:
		[{
			id: 1695575963,
			isLoading: false,
			name: 'Awesome Vol1',
			movies: [{
				name: 'Matrix',
			},{
				name: 'Herr der Ringe',
			}]
		}]
	});
})

