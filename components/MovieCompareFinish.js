import React from 'react'
import * as Actions from '../actions/';
import MovieCompareFinishForm from '../components/MovieCompareFinishForm';
import getUnratedMovieFromCollection from '../lib/getUnratedMovieFromCollection'
import toMovieObject from '../lib/movieIdToMovieObject'

export default class MovieCompareFinish extends React.Component {
	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.next = this.next.bind(this);
		this.finish = this.finish.bind(this);
		this.process = this.props.rate.process[this.props.collectionId];
		this.movie = toMovieObject(
				this.process.movieFromCollection,
				this.props.movieCollections
		);
		this.result = this.process.result+1;
	}

	next(evt) {
		this.dispatch(Actions.finishComparisonProcess(
				this.props.collectionId,
				this.process
			)
		);
	}

	finish(evt) {
		this.next(evt);
		this.url.pushTo('/');
	}

	render() {
		return (
			<MovieCompareFinishForm onNext={this.next} onFinish={this.finish}
				movie={this.movie}
			    result={this.result} />
		);
	}
};

