import React from 'react'
import * as Actions from '../actions/';
import MovieCompareStartForm from '../components/MovieCompareStartForm';
import getUnratedMovieFromCollection from '../lib/getUnratedMovieFromCollection'
import toMovieObject from '../lib/movieIdToMovieObject'

export default class MovieCompareStart extends React.Component {
	constructor (props) {
		super(props)
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
		this.movieCollection = this.props.movieCollections[this.props.collectionId];
		this.nextMovieId = getUnratedMovieFromCollection(
				this.props.rate.personalMovieList,
				this.movieCollection
		);
		this.nextMovie = toMovieObject(this.nextMovieId, this.props.movieCollections);
	}

	submit(evt) {
		this.dispatch(Actions.startComparisonProcess({
			movieCollection: this.movieCollection,
			movieFromCollection: this.nextMovieId
		}));
	}

	render() {
		return (
			<MovieCompareStartForm onSubmit={this.submit}
				nextMovie={this.nextMovie} />
		);
	}
};

